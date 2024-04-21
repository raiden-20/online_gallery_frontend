import header_profile_scss from "@/scss/components/profile/HeaderProfile.module.scss";
import Image from "next/image";
import change_cover from "@/assets/icons/profile/change_cover.svg";
import delete_photo from "@/assets/icons/profile/delete_photo.svg";
import React, {useState} from "react";
import Cookies from "js-cookie";

interface coverSectionHeaderProfileInterface {
    input_coverUrl: string,
    message: string
    changeInputCover(event: React.ChangeEvent<HTMLInputElement>): void
    deleteCover(): void
    isEditMobile : boolean
}

export const CoverSectionHeaderProfile = (props: coverSectionHeaderProfileInterface) => {

    const [isCoverHover, setIsCoverHover] = useState(false)
    const [status] = useState(Cookies.get('status'))
    const [currentId] = useState(Cookies.get('currentId'))
    const [customerId] = useState(Cookies.get('customerId'))
    const [artistId] = useState(Cookies.get('artistId'))

    return (
        <section className={header_profile_scss.cover_section}
                 onMouseOver={() => setIsCoverHover(true)}
                 onMouseLeave={() => setIsCoverHover(false)}>
            <section className={header_profile_scss.cover}>
                <img src={props.input_coverUrl === '' ? '/default_cover_profile.jpg'
                    : props.input_coverUrl}
                     crossOrigin="anonymous"
                     alt={'cover profile'}/>
            </section>

            {(isCoverHover || props.isEditMobile) && status && (currentId === customerId || currentId === artistId) ?
                <section className={header_profile_scss.change_cover}>
                    <button>
                        <input className={header_profile_scss.hidden} type="file" id="setCover"
                               onChange={(event) => props.changeInputCover(event)}/>
                        <label htmlFor="setCover">
                            <Image src={change_cover} className={header_profile_scss.change_cover_img}
                                   alt={'change_cover'} width={0} height={0} priority={true}/>
                        </label>
                    </button>
                    <button onClick={() => props.deleteCover()}>
                        <Image src={delete_photo} className={header_profile_scss.delete_img}
                               alt={'delete_photo'} width={0} height={0} priority={true}/>
                    </button>
                </section>
                : null}
            <p className={header_profile_scss.message}>{props.message}</p>
        </section>
    )
}