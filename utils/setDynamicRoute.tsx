'use client'

import {useRouter} from "next/navigation";
import {useEffect} from "react";

export function SetDynamicRoute() { // todo использовать там, где нужен залогинненый чел
    const router = useRouter()

    useEffect(() => {
        router.refresh()
    }, [router])

    return <></>
}