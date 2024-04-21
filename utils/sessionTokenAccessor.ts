import {getServerSession} from "next-auth";
import {AuthConfig} from "@/app/api/auth/[...nextauth]/route";
import {decrypt} from "./encryption";

export async function getAccessToken() {
    const session = await getServerSession(AuthConfig)
    if (session) {
        // @ts-ignore
        return decrypt(session.access_token)
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