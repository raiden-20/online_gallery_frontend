'use client'

import {useRouter} from "next/navigation";
import {MAIN_PATHS} from "@/paths/main";
import {useEffect} from "react";

export default function Home() {
    const router = useRouter()

    useEffect(() => {
        router.push(MAIN_PATHS.MAIN);
    }, []);

    return <section></section>
}
