import axios from "axios";
import {decrypt} from "../../utils/encryption";

export const PathsAPI = {
    BASE: 'http://localhost:8080',

    CREATE: '/create',
    CHANGE: '/change',
    DELETE: '/delete',
    SEARCH: '/search',

    CUSTOMER: '/customer',
    ARTIST: '/artist',
    ACCOUNT: '/account',

    DATA: '/data',
    EMAIL: '/email',
    PASSWORD: '/password',
    OBJECT: '/object'
}

export const instance = axios.create({
    baseURL: PathsAPI.BASE,
    headers: {
        'Content-Type': 'application/json'
    }
});
export const instanceFile = axios.create({
    baseURL: PathsAPI.BASE,
    headers: {
        'Content-Type': 'multipart/form-data; boundary=---------------------------123456789012345678901234567'
    }
});

export const instanceWithoutToken = axios.create({
    baseURL: PathsAPI.BASE,
    headers: {
        'Content-Type': 'application/json'
    }
});

instance.interceptors.response.use((response) => response,
    async (error) => {
        const prev = error.config
        if (error.response.status === 401 && !prev.sent) {
            prev.sent = true;
            const token = localStorage.getItem('access_token') as string
            prev.headers['Authorization'] = `Bearer ${decrypt(token)}`;

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
            prev.headers['Authorization'] = `Bearer ${decrypt(token)}`;

            return instanceFile(prev);
        }
    }
)

