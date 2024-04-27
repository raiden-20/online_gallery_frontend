import {useEffect, useState} from "react";

import prev_icon from '@/assets/icons/main/prev.svg'
import next_icon from '@/assets/icons/main/next.svg'
import Image from "next/image";

import banner_scss from '@/scss/components/main/main_page/Banner.module.scss'

export const BannerComponent = () => {
    const bannersArr = ['/banner1.svg', '/banner2.svg']
    const [banners, setBanners] = useState(bannersArr)
    const [indexBanner, setIndexBanner] = useState(0)

    useEffect(() => {
        setBanners(bannersArr)
    }, []);

    return (
        <section className={banner_scss.root}>
            <section className={banner_scss.buttons_section}>
                <button className={'button_main_page'}
                        onClick={() => {
                            if (indexBanner > 0) setIndexBanner(indexBanner - 1)
                        }}>
                    <Image src={prev_icon} alt={'prev_icon'} width={0} height={0}/>
                </button>
                <button className={'button_main_page'}
                    onClick={() => {
                        if (indexBanner < banners.length - 1) setIndexBanner(indexBanner + 1)
                    }}>
                    <Image src={next_icon} alt={'next_icon'} width={0} height={0}/>
                </button>
            </section>
            <main className={banner_scss.main}>
                <img src={banners[indexBanner]} className={banner_scss.banner_img}
                     alt={'banner'} crossOrigin={'anonymous'}/>
                <section className={banner_scss.buttons_section}>
                    <div className={banner_scss.date}>26 апреля — 10 мая</div>
                    <button className={'button_main_page-2 ' + banner_scss.button}>
                        Подробнее
                    </button>
                </section>
            </main>
        </section>
    )
}