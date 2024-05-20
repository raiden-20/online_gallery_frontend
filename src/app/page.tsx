'use client'

import {useRouter} from "next/navigation";
import {MAIN_PATHS} from "@/paths/main";

export default function Home() {
    const router = useRouter()

    router.push(MAIN_PATHS.MAIN)

    return <section></section>
}
