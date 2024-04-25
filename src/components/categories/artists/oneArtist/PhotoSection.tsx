import artists_scss from "@/scss/components/categories/Artists.module.scss";
import Image from "next/image";
import back_icon from "@/assets/icons/search/back.svg";
import next_icon from "@/assets/icons/search/next.svg";
import {
    OneOpenedPhotoPostComponent
} from "@/components/profile/profile_elemets/categories/artist/posts/OneOpenedPhotoPostComponent";
import React, {useRef, useState} from "react";

export const PhotoSection = () => {

    const [isHover, setIsHover] = useState(true)
    const [openedPhotoSrc, setOpenedPhotoSrc] = useState<string[]>([])


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
                <li onClick={() => setOpenedPhotoSrc(['/default_avatar_profile.jpg', '/default_work_profile.jpg', '/default_avatar_profile.jpg'])}>
                    <Image src={'/default_avatar_profile.jpg'} className={artists_scss.onePhoto}
                           alt={'photo'} width={0} height={0}/>
                </li>
                <li>
                    <Image src={'/default_avatar_profile.jpg'} className={artists_scss.onePhoto}
                           alt={'photo'} width={0} height={0}/>
                </li>
                <li>
                    <Image src={'/default_avatar_profile.jpg'} className={artists_scss.onePhoto}
                           alt={'photo'} width={0} height={0}/>
                </li>
                <li>
                    <Image src={'/default_avatar_profile.jpg'} className={artists_scss.onePhoto}
                           alt={'photo'} width={0} height={0}/>
                </li>
                <li>
                    <Image src={'/default_avatar_profile.jpg'} className={artists_scss.onePhoto}
                           alt={'photo'} width={0} height={0}/>
                </li>
            </ul>
            {isHover ?
                <button className={artists_scss.next_icon}
                        onMouseOver={() => setIsHover(true)}
                        onClick={scrollRight}>
                    <Image src={next_icon} alt={'next_icon'}/>
                </button>
                : null}
            {openedPhotoSrc.length !== 0 ?
                <OneOpenedPhotoPostComponent setOpenedPhotoSrc={setOpenedPhotoSrc} openedPhotoSrc={openedPhotoSrc}/>
                : null}
        </section>
    )
}