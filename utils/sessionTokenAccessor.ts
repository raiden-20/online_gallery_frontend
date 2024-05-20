import {getServerSession} from "next-auth";
import {decrypt} from "./encryption";
import {AuthConfig} from "./auth_config";
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
