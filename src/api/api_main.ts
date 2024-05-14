import axios from "axios";

export const PathsAPI = {
    BASE: 'http://localhost:8080',

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
    CART: '/cart',
    ORDER: '/order',

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
        // @ts-ignore
        const resp = await fetch(`http://localhost:8000/realms/online_gallery/protocol/openid-connect/token`, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                client_id: 'frontend',
                client_secret: 'M6qi9XuMsrQ6Q3Q4itcadsfsnuET0VvD',
                grant_type: 'refresh_token',
                refresh_token: refresh
            }),
            method: 'POST'
        })

        // @ts-ignore
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

