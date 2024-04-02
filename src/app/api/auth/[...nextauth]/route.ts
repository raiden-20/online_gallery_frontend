import NextAuth, {AuthOptions} from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

import {encrypt} from "../../../../../utils/encryption";
import {JWT} from "next-auth/jwt";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

async function refreshAccessToken(token: JWT) {
    const resp = await axios.post(`${process.env.REFRESH_TOKEN_UTL}`,
        new URLSearchParams({
            client_id: process.env.KEYCLOAK_CLIENT_ID as string,
            client_secret: process.env.KEYCLOAK_CLIENT_SECRET as string,
            grant_type: 'refresh_token',
            refresh_token: token.refresh_token as string
        }), {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
    // @ts-ignore
    const refreshToken = await resp.json()
    // @ts-ignore
    if (!resp.ok) throw refreshToken

    return {
        ...token,
        access_token: refreshToken.access_token,
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
            session.access_token = encrypt(token.accessToken)
            // @ts-ignore
            session.id_token = encrypt(token.id_token)
            // @ts-ignore
            session.roles = token.decoded.realm_access.roles
            // @ts-ignore
            session.error = token.error

            return session
        }
    }
};

const handler = NextAuth(AuthConfig)

export {handler as GET, handler as POST}


