'use client'

import {useRouter} from "next/navigation";
import {MAIN_PATHS} from "@/paths/main";
import {useEffect} from "react";
import * as dotenv from "dotenv";

export default function Home() {
    const router = useRouter()

    dotenv.config({
        path: '../.env'
    });

    useEffect(() => {
        router.push(MAIN_PATHS.MAIN);
    }, []);

    return <section></section>
}
