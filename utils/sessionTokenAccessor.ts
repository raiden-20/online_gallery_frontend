import {AuthOptions, getServerSession} from "next-auth";
import {decrypt, encrypt} from "./encryption";
import KeycloakProvider from "next-auth/providers/keycloak";
import {jwtDecode} from "jwt-decode";
import {JWT} from "next-auth/jwt";

export async function getAccessToken() {
    const session = await getServerSession(AuthConfig)
    if (session) {
        // @ts-ignore
        return session.access_token
    }
    return null
}

export async function getIdToken() {
    const session = await getServerSession(AuthConfig)
    if (session) {
        // @ts-ignore
        return decrypt(session.id_token)
    }
    return null
}


async function refreshAccessToken(token: JWT) {
    const resp = await fetch(`${process.env.REFRESH_TOKEN_URL}`, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            client_id: process.env.KEYCLOAK_CLIENT_ID as string,
            client_secret: process.env.KEYCLOAK_CLIENT_SECRET as string,
            grant_type: 'refresh_token',
            refresh_token: token.refresh_token as string
        }),
        method: 'POST'
    })

    const refreshToken = await resp.json()

    if (!resp.ok) throw refreshToken

    console.log('token was refreshed')
    return {
        ...token,
        accessToken: refreshToken.access_token,
        decoded: jwtDecode(refreshToken.access_token as string),
        id_token: refreshToken.id_token,
        expires_at: Math.floor(Date.now() / 1000) + refreshToken.expires_at,
        refresh_token: refreshToken.refresh_token
    }
}

export const AuthConfig: AuthOptions = {
    providers: [
        KeycloakProvider({
            clientId: `${process.env.KEYCLOAK_CLIENT_ID}`,
            clientSecret: `${process.env.KEYCLOAK_CLIENT_SECRET}`,
            issuer: `${process.env.KEYCLOAK_ISSUER}`,
        }),
    ],
    callbacks: {
        async jwt({token, account}) {
            const nowTimeStamp = Math.floor(Date.now() / 1000)

            if (account) {

                token.decoded = jwtDecode(account.access_token as string)
                token.accessToken = account.access_token
                token.id_token = account.id_token
                token.expires_at = account.expires_at
                token.refresh_token = account.refresh_token
                token.providerAccountId = account.providerAccountId

                return token
            } else { // @ts-ignore
                if (nowTimeStamp < token.expires_at) {
                    return token
                } else {
                    try {
                        return await refreshAccessToken(token)
                    } catch (error) {
                        return {...token, error: 'RefreshTokenError'}
                    }
                }
            }

        },
        async session({session, token}) {

            // @ts-ignore
            session.accessToken = token.accessToken
            // @ts-ignore
            session.id_token = encrypt(token.id_token)
            // @ts-ignore
            session.roles = token.decoded.realm_access.roles
            // @ts-ignore
            session.error = token.error
            // @ts-ignore
            session.providerAccountId = token.providerAccountId
            // @ts-ignore
            session.refresh_token = token.refresh_token

            console.log('SESSION', session)

            return session
        }
    }
};