import {getServerSession} from "next-auth";
import {AuthConfig} from "@/app/api/auth/[...nextauth]/route";
import {getIdToken} from "../../../../../utils/sessionTokenAccessor";
import axios from "axios";

export async function GET() {
    const session = await getServerSession(AuthConfig)

    if (session) {
        const idToken = await getIdToken()
        let url = `${process.env.END_SESSION_URL}?id_token_hint=${idToken}&post_logout_redirect_uri=${encodeURIComponent(process.env.NEXTAUTH_URL as string)}`

        try {
            const resp = await axios.get(url)
        } catch (error) {
            console.error(error)
            return new Response('', {
                status: 500,
            });
        }
    }
    return new Response('', {
        status: 200,
    });
}