import {getServerSession} from "next-auth";
import {getIdToken} from "../../../../../utils/sessionTokenAccessor";

export async function GET() {
    const session = await getServerSession()

    if (session) {
        const idToken = await getIdToken()
        let url = `http://localhost:8000/realms/online_gallery/protocol/openid-connect/logout?id_token_hint=${idToken}&post_logout_redirect_uri=http://localhost:3000`

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