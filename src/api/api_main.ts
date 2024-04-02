'use client'
import axios from "axios";

export const PathsAPI= {
    BASE: 'http://localhost:8080',

    CREATE: '/create',
    CHANGE: '/change',
    DELETE: '/delete',

    CUSTOMER: '/customer',
    ARTIST: '/artist',
    ACCOUNT: '/account',

    DATA: '/data',
    EMAIL: '/email',
    PASSWORD: '/password'
}

export const instance = axios.create({
    baseURL: PathsAPI.BASE,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const setToken = (token: string) => {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

