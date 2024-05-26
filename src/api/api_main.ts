import axios from "axios";
import dotenv from 'dotenv'

export const PathsAPI = {
    BASE: 'http://localhost:8080/api',

    CREATE: '/create',
    BUY: '/buy',
    CHANGE: '/change',
    DELETE: '/delete',
    SEARCH: '/search',
    ACTION: '/action',
    SUBSCRIBE: '/subscribe',
    UNSUBSCRIBE: '/unsubscribe',
    SEND: '/send',
    EDIT: '/edit',
    RECEIVE: '/receive',

    CUSTOMER: '/customer',
    ARTIST: '/artist',
    SUBSCRIPTIONS: '/subscriptions',
    SUBSCRIBERS: '/subscribers',
    ACCOUNT: '/account',

    DATA: '/data',
    EMAIL: '/email',
    PASSWORD: '/password',
    OBJECT: '/object',
    ADDRESS: '/address',
    CARD: '/card',

    POST: '/post',
    ART: '/art',
    AUCTION: '/auction',
    RATE: '/rate',
    MAX_RATE: '/maxrate',
    AUCTIONS: '/auctions',
    CART: '/cart',
    ORDER: '/order',

    NOTIFICATION: '/notification',
    SSE: '/sse',

    PUBLIC: '/public',
    PRIVATE: '/private'
}

export const instance = axios.create({
    baseURL: PathsAPI.BASE,
    headers: {
        'Content-Type': 'application/json',
    }
});
export const instanceFile = axios.create({
    baseURL: PathsAPI.BASE,
    headers: {
        'Content-Type': 'multipart/form-data; boundary=---------------------------123456789012345678901234567',
    }
});

export const instanceWithoutToken = axios.create({
    baseURL: PathsAPI.BASE,
    headers: {
        'Content-Type': 'application/json',
    }
});

instance.interceptors.response.use((response) => response,
    async (error) => {
        const prev = error.config
        if ((error.response.status === 401 || error.response.status === 400) && !prev.sent) {
            prev.sent = true;
            const res = await refreshTokenFn()

            console.log(res.access_token)
            prev.headers['Authorization'] = `Bearer ${res.access_token}`;

            return instance(prev);
        }
    }
)

instanceFile.interceptors.response.use((response) => response,
    async (error) => {
        const prev = error.config
        if ((error.response.status === 401 || error.response.status === 400) && !prev.sent) {
            prev.sent = true;

            const res = await refreshTokenFn()
            console.log(res.access_token)
            prev.headers['Authorization'] = `Bearer ${res.access_token}`;

            return instanceFile(prev);
        }
    }
)

export const setToken = (token: string) => {
    instance.defaults.headers['Authorization'] = `Bearer ${token}`;
    instanceFile.defaults.headers['Authorization'] = `Bearer ${token}`;
}

const refreshTokenFn = async () => {
    // @ts-ignore
    const session = JSON.parse(localStorage.getItem("session"));

    try {
        // @ts-ignore
        const refresh = session.refresh_token

        //const client = process.env.NEXTAUTH_URL as string
        //const refresh_token_url = process.env.REFRESH_TOKEN_URL as string

        const client = 'SuWauvFOpZ2rmoNJr02sCOrwhQlivH6r'
        const refresh_token_url = 'http://localhost:8000/realms/online_gallery/protocol/openid-connect/token'

        const resp = await fetch(refresh_token_url, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                client_id: 'frontend',
                client_secret: client,
                grant_type: 'refresh_token',
                refresh_token: refresh
            }),
            method: 'POST'
        })

        const session_new = await resp.json();

        if (!session_new?.access_token) {
            localStorage.removeItem("session");
        }

        localStorage.setItem("session", JSON.stringify(session_new));
        localStorage.setItem("access_token", JSON.stringify(session_new.access_token));

        return session_new;
    } catch (error) {
        localStorage.removeItem("session");
    }
};

