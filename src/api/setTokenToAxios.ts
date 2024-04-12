// 'use client'
//
// import {useSession} from "next-auth/react";
// import {useEffect} from "react";
// import {decrypt} from "../../utils/encryption";
// import {instance, instanceFile} from "@/api/api_main";
//
// export const setTokenToInstance = () => {
//     const { data: session, status } = useSession()
//
//
//     useEffect(() => {
//         const request = instance.interceptors.request.use((config) => {
//                 if (!config.headers['Authorization']) {
//                     // @ts-ignore
//                     config.headers['Authorization'] = `Bearer ${decrypt(session.access_token)}`
//                 }
//                 return config
//             }
//         );
//         const response = instance.interceptors.response.use((response) => response,
//             async (error) => {
//                 const prev = error.config
//                 if (error.response.status === 401 && !prev.sent) {
//                     prev.sent = true;
//                     // @ts-ignore
//                     prev.headers['Authorization'] = `Bearer ${decrypt(session.access_token)}`;
//
//                     return instance(prev);
//                 }
//             }
//         )
//         return () => {
//             instance.interceptors.request.eject(request)
//             instance.interceptors.response.eject(response)
//         }
//     }, [session]);
//
//     return instance
// }
//
// export const setTokenToInstanceFile = () => {
//     const {data: session} = useSession();
//
//     useEffect(() => {
//         const request = instanceFile.interceptors.request.use((config) => {
//                 if (!config.headers['Authorization']) {
//                     // @ts-ignore
//                     config.headers['Authorization'] = `Bearer ${decrypt(session.access_token)}`
//                 }
//                 return config
//             }
//         );
//         const response = instanceFile.interceptors.response.use((response) => response,
//             async (error) => {
//                 const prev = error.config
//                 if (error.response.status === 401 && !prev.sent) {
//                     prev.sent = true;
//                     // @ts-ignore
//                     prev.headers['Authorization'] = `Bearer ${decrypt(session.access_token)}`;
//
//                     return instanceFile(prev);
//                 }
//             }
//         )
//         return () => {
//             instanceFile.interceptors.request.eject(request)
//             instanceFile.interceptors.response.eject(response)
//         }
//     }, [session]);
//
//     return instanceFile
// }