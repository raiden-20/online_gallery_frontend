import {useEffect, useRef, useState} from "react";

import prev_icon from '@/assets/icons/main/prev.svg'
import next_icon from '@/assets/icons/main/next.svg'
import Image from "next/image";

import banner_scss from '@/scss/components/main/main_page/Banner.module.scss'

export const BannerComponent = () => {
    const bannersArr = ['/banner1.svg', '/banner2.svg']
    const bannersArrMobile = ['/banner1_mobile.svg', '/banner2_mobile.svg']

    const BannerRef = useRef<HTMLUListElement>(null);
    const BannerRef_mobile = useRef<HTMLUListElement>(null);

    const scrollToNextPhoto = () => {
        if (BannerRef.current && BannerRef_mobile.current) {
            const galleryWidth = BannerRef.current.offsetWidth;
            const scrollLeft = BannerRef.current.scrollLeft;

            const galleryWidthMobile = BannerRef_mobile.current.offsetWidth;
            const scrollLeftMobile = BannerRef_mobile.current.scrollLeft;

            BannerRef.current.scrollTo({
                left: scrollLeft + galleryWidth + 30,
                behavior: 'smooth',
            });
            BannerRef_mobile.current.scrollTo({
                left: scrollLeftMobile + galleryWidthMobile + 30,
                behavior: 'smooth',
            });
        }
    };

    const scrollToPreviousPhoto = () => {
        if (BannerRef.current && BannerRef_mobile.current) {
            const galleryWidth = BannerRef.current.offsetWidth;
            const scrollLeft = BannerRef.current.scrollLeft;

            const galleryWidthMobile = BannerRef_mobile.current.offsetWidth;
            const scrollLeftMobile = BannerRef_mobile.current.scrollLeft;

            BannerRef.current.scrollTo({
                left: scrollLeft - galleryWidth - 30,
                behavior: 'smooth',
            });
            BannerRef_mobile.current.scrollTo({
                left: scrollLeftMobile - galleryWidthMobile - 30,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section className={banner_scss.root}>
            <section className={banner_scss.buttons_section}>
                <button className={'button_main_page'}
                        onClick={scrollToPreviousPhoto}>
                    <Image src={prev_icon} alt={'prev_icon'} width={0} height={0}/>
                </button>
                <button className={'button_main_page'}
                        onClick={scrollToNextPhoto}>
                    <Image src={next_icon} alt={'next_icon'} width={0} height={0}/>
                </button>
            </section>
            <ul className={banner_scss.ul} ref={BannerRef}>
                {bannersArr.map((banner, index) => {
                    return (
                        <li className={banner_scss.main} key={index}>
                            <img src={banner} className={banner_scss.banner_img}
                                 alt={'banner'} crossOrigin={'anonymous'}/>
                        </li>
                    )
                })}
            </ul>
            <ul className={banner_scss.ul_mobile} ref={BannerRef_mobile}>
                {bannersArrMobile.map((banner, index) => {
                    return (
                        <li className={banner_scss.main} key={index}>
                            <img src={banner} className={banner_scss.banner_img}
                                 alt={'banner'} crossOrigin={'anonymous'}/>
                        </li>
                    )
                })}
            </ul>
            <section className={banner_scss.buttons_section}>
                <div className={banner_scss.date}>26 апреля — 10 мая</div>
                <button className={'button_main_page-2 ' + banner_scss.button}>
                    Подробнее
                </button>
            </section>
        </section>
    )
}