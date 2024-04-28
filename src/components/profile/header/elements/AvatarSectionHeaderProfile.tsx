import header_profile_scss from "@/scss/components/profile/HeaderProfile.module.scss";
import Image from "next/image";
import change_avatar from "@/assets/icons/profile/change_avatar.svg";
import delete_photo from "@/assets/icons/profile/delete_photo.svg";
import React, {useState} from "react";
import Cookies from "js-cookie";

interface avatarSectionHeaderProfileInterface {
    input_avatarUrl: string,
    message: string
    changeInputAvatar(event: React.ChangeEvent<HTMLInputElement>): void
    deleteAvatar(): void
    isEditMobile : boolean
}

export const AvatarSectionHeaderProfile = (props: avatarSectionHeaderProfileInterface) => {

    const [isAvatarHover, setIsAvatarHover] = useState(false)
    const [currentId] = useState(Cookies.get('currentId'))
    const [artistId] = useState(Cookies.get('artistId'))
    const [customerId] = useState(Cookies.get('customerId'))
    const [status] = useState(Cookies.get('status'))

    return (
        <section className={header_profile_scss.avatar_section}
                 onMouseOver={() => setIsAvatarHover(true)}
                 onMouseLeave={() => setIsAvatarHover(false)}>\
            <section className={header_profile_scss.avatar}>
                <img src={props.input_avatarUrl === '' ? '/default_avatar_profile.svg'
                    : props.input_avatarUrl}
                     crossOrigin="anonymous"
                     alt={'avatar profile'}/>
            </section>
            {(isAvatarHover || props.isEditMobile) && status && (currentId === customerId || currentId === artistId) ?
                <section className={header_profile_scss.change_avatar}>
                    <button>
                        <input className={header_profile_scss.hidden} type="file" id="setAvatar"
                               onChange={(event) => props.changeInputAvatar(event)}/>
                        <label htmlFor="setAvatar">
                            <Image src={change_avatar} alt={'change_cover'} width={0} height={0} priority={true}/>
                        </label>
                    </button>
                    <button onClick={() => props.deleteAvatar()}>
                        <Image src={delete_photo} className={header_profile_scss.delete}
                               alt={'delete_photo'} width={0} height={0} priority={true}/>
                    </button>
                </section>
                : null
            }
        </section>
    )
}