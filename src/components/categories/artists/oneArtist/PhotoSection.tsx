import artists_scss from "@/scss/components/categories/Artists.module.scss";
import Image from "next/image";
import back_icon from "@/assets/icons/search/back.svg";
import next_icon from "@/assets/icons/search/next.svg";
import React, {useCallback, useRef, useState} from "react";
import {useRouter} from "next/navigation";
import {MAIN_PATHS} from "@/paths/main";

type my = {
    [key: string]: string;
    artId: string;
}

interface photoInterface {
    photos: my
    name: string
}

export const PhotoSection = (props: photoInterface) => {
    const router = useRouter()
    const [isHover, setIsHover] = useState(true)

    const listRef = useRef<HTMLUListElement>(null);

    const scrollRight = () => {
        if (listRef.current) {
            listRef.current.scrollLeft += 200;
        }
    };

    const scrollLeft = () => {
        if (listRef.current) {
            listRef.current.scrollLeft -= 200;
        }
    };

    const goToArt = useCallback((artId: string) => {
        router.push(MAIN_PATHS.ONE_ART + `/${artId}`)
    }, [])

    return (
        <section className={artists_scss.photo_section}>
            {Object.keys(props.photos).length > 0 ?
                <ul ref={listRef}
                    className={artists_scss.one_user_photo + ' scrollbarNone'}
                    onMouseOver={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}>
                    {isHover && Object.keys(props.photos).length > 2 ?
                        <button className={artists_scss.back_icon}
                                onMouseOver={() => setIsHover(true)}
                                onClick={scrollLeft}>
                            <Image src={back_icon} alt={'next_icon'}/>
                        </button>
                        : null}
                    {Object.keys(props.photos).map((key, index) => {
                        return (
                            <li key={key} onClick={() => {
                                goToArt(key)
                            }}>
                                <img src={props.photos[key]} className={artists_scss.onePhoto}
                                     alt={'photo'} crossOrigin={'anonymous'}/>
                            </li>
                        )
                    })}
                    {isHover && Object.keys(props.photos).length > 2 ?
                        <button className={artists_scss.next_icon}
                                onMouseOver={() => setIsHover(true)}
                                onClick={scrollRight}>
                            <Image src={next_icon} alt={'next_icon'}/>
                        </button>
                        : null}
                </ul>
                :
                <p className={'no_elements ' + artists_scss.no_photos}>{props.name + ' '} еще не публиковал свои работы...</p>
            }
        </section>
    )
}