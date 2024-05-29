import Image from "next/image";
import prev_icon from "@/assets/icons/main/prev.svg";
import next_icon from "@/assets/icons/main/next.svg";

import {useRef} from "react";
import popular_scss from "@/scss/components/main/main_page/Popular.module.scss";
import main_scss from "@/scss/components/main/main_page/Main.module.scss";
import {MainPageArts} from "@/interfaces/artInterface";
import {useRouter} from "next/navigation";
import {MAIN_PATHS} from "@/paths/main";

interface PopularAuctionInterface {
    title: string,
    arts: MainPageArts[]
}

export const PopularAndAuctionsComponent = (props: PopularAuctionInterface) => {
    const router = useRouter()

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
                {props.arts.map((art, index) => {
                    return (
                        <li key={index}>
                            <section className={popular_scss.root_oneWork}
                            onClick={() => {
                                if (props.title === 'Популярное') {
                                    router.push(MAIN_PATHS.ONE_ART + `/${art.id}`)
                                } else {
                                    router.push(MAIN_PATHS.AUCTION + `/${art.id}`)
                                }
                            }}>
                                <img src={art.photo} className={popular_scss.one_work_img}
                                     alt={'one work'}
                                     crossOrigin="anonymous"/>
                                <section className={popular_scss.one_work_data}>
                                    <section className={popular_scss.one_work_names}>
                                        <div className={popular_scss.one_work_weight}>{art.artistName}</div>
                                        <div>{art.name}</div>
                                    </section>
                                    <div className={popular_scss.one_work_price}>{art.price + ' '} ₽</div>
                                </section>
                            </section>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}