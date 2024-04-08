
import axios from "axios";

export const PathsAPI= {
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

export const setToken = (token: string) => {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    instanceFile.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

