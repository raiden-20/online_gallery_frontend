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
        LOGOUT_FIRST_PART: 'http://localhost:8000/realms/online_gallery/protocol/openid-connect/logout?id_token_hint=',
        LOGOUT_SECOND_PART: '&post_logout_redirect_uri=http://localhost:3000',
        REFRESH_TOKEN_URL: 'http://localhost:8000/realms/online_gallery/protocol/openid-connect/token'
    },
};

export default nextConfig;
