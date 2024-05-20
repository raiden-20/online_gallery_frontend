import NextAuth from "next-auth";
import {AuthConfig} from "../../../../../utils/sessionTokenAccessor";



const handler = NextAuth(AuthConfig)

export {handler as GET, handler as POST}


