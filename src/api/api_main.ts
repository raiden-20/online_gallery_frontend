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
        if (error.response.status === 401 && !prev.sent) {
            prev.sent = true;
            const token = localStorage.getItem('access_token') as string
            prev.headers['Authorization'] = `Bearer ${token}`;

            return instance(prev);
        }
    }
)

instanceFile.interceptors.response.use((response) => response,
    async (error) => {
        const prev = error.config
        if (error.response.status === 401 && !prev.sent) {
            prev.sent = true;
            const token = localStorage.getItem('access_token') as string
            prev.headers['Authorization'] = `Bearer ${token}`;

            return instanceFile(prev);
        }
    }
)

export const setToken = (token: string) => {
    instance.defaults.headers['Authorization'] = `Bearer ${token}`;
    instanceFile.defaults.headers['Authorization'] = `Bearer ${token}`;
}

