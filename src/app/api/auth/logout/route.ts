import {getServerSession} from "next-auth";
import {AuthConfig} from "@/app/api/auth/[...nextauth]/route";
import {getIdToken} from "../../../../../utils/sessionTokenAccessor";

export async function GET() {
    const session = await getServerSession(AuthConfig)

    if (session) {
        const idToken = await getIdToken()
        let url = `${process.env.END_SESSION_URL}?id_token_hint=${idToken}&post_logout_redirect_uri=${encodeURIComponent('http://localhost:3000')}`

        try {
            const resp = await fetch(url, {method: "GET"})
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