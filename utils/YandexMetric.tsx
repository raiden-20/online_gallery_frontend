'use client'

import React, {useEffect} from 'react';
import 'dotenv/config'
import Script from "next/script";
import {usePathname, useSearchParams} from "next/navigation";

type Props = {
    children: React.ReactNode;
};

export const YandexMetric = () => {

    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        const url = `${pathname}?${searchParams}`
        ym(97428671, "hit", url);
    }, [pathname, searchParams]);

    return (
        <Script id="yandex-metrika">
            {`
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(97428671, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
   });  
      `}
        </Script>
    )
};



export const ClickJustButton = (value: string) => {
    ym(97428671, 'reachGoal', value)
}
