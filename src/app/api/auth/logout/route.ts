import {getServerSession} from "next-auth";
import {getIdToken} from "../../../../../utils/sessionTokenAccessor";
import {AuthConfig} from "../../../../../utils/auth_config";

export async function GET() {
    const session = await getServerSession(AuthConfig)

    if (session) {
        const idToken = await getIdToken()
        let url = process.env.LOGOUT_FIRST_PART + `${idToken}` + process.env.LOGOUT_SECOND_PART

        try {
            await fetch(url, {method: "GET"});
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