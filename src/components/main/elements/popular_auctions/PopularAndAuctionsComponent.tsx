import Image from "next/image";
import prev_icon from "@/assets/icons/main/prev.svg";
import next_icon from "@/assets/icons/main/next.svg";

import {useRef} from "react";
import popular_scss from "@/scss/components/main/main_page/Popular.module.scss";
import main_scss from "@/scss/components/main/main_page/Main.module.scss";

interface PopularAuctionInterface {
    title: string,
    photos: string[]
}

export const PopularAndAuctionsComponent = (props: PopularAuctionInterface) => {

    const galleryRef = useRef<HTMLUListElement>(null);

    const scrollToNextPhoto = () => {
        if (galleryRef.current) {
            const galleryWidth = galleryRef.current.offsetWidth;
            const scrollLeft = galleryRef.current.scrollLeft;
            const photoWidth = galleryWidth / 1.5;

            galleryRef.current.scrollTo({
                left: scrollLeft + photoWidth,
                behavior: 'smooth',
            });
        }
    };

    const scrollToPreviousPhoto = () => {
        if (galleryRef.current) {
            const galleryWidth = galleryRef.current.offsetWidth;
            const scrollLeft = galleryRef.current.scrollLeft;
            const photoWidth = galleryWidth / 1.5;

            galleryRef.current.scrollTo({
                left: scrollLeft - photoWidth,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section className={main_scss.root}>
            <section className={main_scss.header_arrows}>
                <button className={'button_main_page'}
                        onClick={scrollToPreviousPhoto}>
                    <Image src={prev_icon} alt={'prev_icon'} width={0} height={0}/>
                </button>
                <header className={main_scss.header}>{props.title}</header>
                <button className={'button_main_page'}
                        onClick={scrollToNextPhoto}>
                    <Image src={next_icon} alt={'next_icon'} width={0} height={0}/>
                </button>
            </section>
            <ul ref={galleryRef} className={popular_scss.ul}>
                {props.photos.map((img, index) => {
                    return (
                        <li key={index}>
                            <section className={popular_scss.root_oneWork}>
                                <img src={img} className={popular_scss.one_work_img}
                                     alt={'one work'}
                                     crossOrigin="anonymous"/>
                                <section className={popular_scss.one_work_data}>
                                    <section className={popular_scss.one_work_names}>
                                        <div className={popular_scss.one_work_weight}>Имя</div>
                                        <div>Название</div>
                                    </section>
                                    <div className={popular_scss.one_work_price}>100000 ₽</div>
                                </section>
                            </section>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}