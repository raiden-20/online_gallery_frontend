/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost'],
    },
    env: {
        KEYCLOAK_CLIENT_ID: 'frontend',
        KEYCLOAK_CLIENT_SECRET: '06s0GeAkzJnWDVe2tK7wm36jYaJdVlgd',
        KEYCLOAK_ISSUER: 'http://localhost:8000/realms/online_gallery',
        NEXTAUTH_URL: 'http://localhost:3000',
        NEXTAUTH_SECRET: 'my-own-secret-189656-haha',
        END_SESSION_URL: 'http://localhost:8000/realms/online_gallery/protocol/openid-connect/logout',
        REFRESH_TOKEN_URL: 'http://localhost:8000/realms/online_gallery/protocol/openid-connect/token'
    },
};

export default nextConfig;
