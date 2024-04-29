import artists_scss from "@/scss/components/categories/Artists.module.scss";
import Image from "next/image";
import back_icon from "@/assets/icons/search/back.svg";
import next_icon from "@/assets/icons/search/next.svg";
import {
    OneOpenedPhotoPostComponent
} from "@/components/profile/profile_elemets/categories/artist/posts/elements/OneOpenedPhotoPostComponent";
import React, {useRef, useState} from "react";

interface photoInterface {
    photos: {artId: string}
}

export const PhotoSection = (props: photoInterface) => {

    const [isHover, setIsHover] = useState(true)
    const [openedPhotoSrc, setOpenedPhotoSrc] = useState<string[]>([])
    const [indexOpened, setIndexOpened] = useState(0)


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

    return (
        <section>
            <ul ref={listRef}
                className={artists_scss.one_user_photo}
                onMouseOver={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}>
                {isHover ?
                    <button className={artists_scss.back_icon}
                            onMouseOver={() => setIsHover(true)}
                            onClick={scrollLeft}>
                        <Image src={back_icon} alt={'next_icon'}/>
                    </button>
                    : null}
                {Object.values(props.photos).map((value, index) => {
                    return (
                        <li key={index} onClick={() => {
                            setOpenedPhotoSrc(['/default_cover_profile.jpg', '/default_work_profile.jpg', '/default_cover_profile.jpg'])
                            setIndexOpened(index)
                        }}>
                            <img src={value} className={artists_scss.onePhoto}
                                 alt={'photo'} crossOrigin={'anonymous'}/>
                        </li>
                    )
                })}
            </ul>
            {isHover ?
                <button className={artists_scss.next_icon}
                        onMouseOver={() => setIsHover(true)}
                        onClick={scrollRight}>
                    <Image src={next_icon} alt={'next_icon'}/>
                </button>
                : null}
            {openedPhotoSrc.length !== 0 ?
                <OneOpenedPhotoPostComponent setOpenedPhotoSrc={setOpenedPhotoSrc} openedPhotoSrc={openedPhotoSrc}
                                             indexOpened={indexOpened} setIndexOpened={setIndexOpened}/>
                : null}
        </section>
    )
}