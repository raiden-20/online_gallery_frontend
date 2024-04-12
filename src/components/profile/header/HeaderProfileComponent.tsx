import header_profile_scss from '@/scss/components/profile/HeaderProfile.module.scss'
import Image from "next/image";
import bell_icon from '@/assets/icons/profile/bell_icon.svg'
import change_cover from '@/assets/icons/profile/change_cover.svg'
import change_avatar from '@/assets/icons/profile/change_avatar.svg'
import important from '@/assets/icons/profile/important.svg'

import delete_photo from '@/assets/icons/profile/delete_photo.svg'

import React, {useState} from "react";
import Cookies from "js-cookie";
import {signIn} from "next-auth/react";
import {ROLES} from "@/paths/main";

interface HeaderProfileInterface {
    input_coverUrl: string,
    input_avatarUrl: string,
    input_name: string,
    isNeedChangeData: boolean

    setInput_name(input_name: string): void

    changeInputCover(event: React.ChangeEvent<HTMLInputElement>): void

    changeInputAvatar(event: React.ChangeEvent<HTMLInputElement>): void

    setIsChangeDataClicked(isChangeDataClicked: boolean): void

    setIsNeedChangeData(flag: boolean): void

    cancelChanging(): void

    deleteAvatar(): void

    deleteCover(): void

    message: string
}

export const HeaderProfileComponent = (props: HeaderProfileInterface) => {
    const [isCoverHover, setIsCoverHover] = useState(false)
    const [isAvatarHover, setIsAvatarHover] = useState(false)
    const [isNameClicked, setIsNameClicked] = useState(false)

    const [currentRole] = useState(Cookies.get('currentRole'))
    const [role] = useState(Cookies.get('role'))
    const [currentId] = useState(Cookies.get('currentId'))
    const [artistId] = useState(Cookies.get('artistId'))
    const [customerId] = useState(Cookies.get('customerId'))
    const [status] = useState(Cookies.get('status'))

    return (
        <section className={header_profile_scss.page}>
            <section className={header_profile_scss.root}>
                <section className={header_profile_scss.cover_section}
                         onMouseOver={() => setIsCoverHover(true)}
                         onMouseLeave={() => setIsCoverHover(false)}>
                    <section className={header_profile_scss.cover}>
                        <img src={props.input_coverUrl=== '' ? '/default_cover_profile.jpg'
                            : props.input_coverUrl}
                             alt={'cover profile'}/>
                    </section>

                    {isCoverHover && status && (currentId === customerId || currentId === artistId) ?
                        <section className={header_profile_scss.change_cover}>
                            <button>
                                <input className={header_profile_scss.hidden} type="file" id="setCover"
                                       onChange={(event) => props.changeInputCover(event)}/>
                                <label htmlFor="setCover">
                                    <Image src={change_cover} alt={'change_cover'} width={0} height={0} priority={true}/>
                                </label>
                            </button>
                            <button onClick={() => props.deleteCover()}>
                                <Image src={delete_photo} alt={'delete_photo'} width={0} height={0} priority={true}/>
                            </button>
                        </section>
                        : null}
                    <p className={header_profile_scss.message}>{props.message}</p>
                </section>
                <section className={header_profile_scss.profile_data}>
                    <section className={header_profile_scss.avatar_section}
                             onMouseOver={() => setIsAvatarHover(true)}
                             onMouseLeave={() => setIsAvatarHover(false)}>\
                        <section className={header_profile_scss.avatar}>
                            <img src={props.input_avatarUrl === '' ? '/default_avatar_profile.jpg'
                                : props.input_avatarUrl}
                                 alt={'avatar profile'}/>
                        </section>
                        {isAvatarHover && status && (currentId === customerId || currentId === artistId) ?
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
                    <section className={header_profile_scss.name_section}>
                        {isNameClicked && status && (currentId === customerId || currentId === artistId) ?
                            <input value={props.input_name}
                                   onChange={(event) => {
                                       props.setInput_name(event.target.value)
                                       props.setIsNeedChangeData(true)
                                   }}/>
                            :
                            <button className={header_profile_scss.name}
                                    onClick={() => setIsNameClicked(true)}>
                                {props.input_name}
                            </button>
                        }
                    </section>
                    {(artistId && artistId !== currentId || artistId !== currentId) &&
                    role !== ROLES.ARTIST && currentRole === ROLES.ARTIST ?
                        <section className={header_profile_scss.subscriber_section}>
                            <button className={'main_button'}
                                    onClick={() => {
                                        if (status) {
                                            // todo
                                        } else {
                                            signIn('keycloak')
                                                .then(() => {
                                                    Cookies.set('role', ROLES.CUSTOMER)
                                                    Cookies.set('status', 'authenticated')
                                                })
                                        }
                                    }}>
                                Подписаться
                            </button>
                            <button className={header_profile_scss.button_bell}>
                                <Image src={bell_icon} className={header_profile_scss.bell_image}
                                       alt={'bell_icon'} width={0} height={0}/>
                            </button>
                        </section>
                        : null
                    }
                </section>
            </section>
            {props.isNeedChangeData ?
                <section className={header_profile_scss.change_data_window}>
                    <section className={header_profile_scss.change_data_window_data}>
                        <Image src={important} alt={'important'} width={0} height={0}/>
                        <section>Сохранить изменения?</section>
                    </section>
                    <footer className={header_profile_scss.change_data_window_buttons}>
                        <button className={'cancel_button'} onClick={() => props.cancelChanging()}>
                            Отменить
                        </button>
                        <button className={'main_button'} onClick={() => {
                            setIsNameClicked(false)
                            props.setIsChangeDataClicked(true)
                        }
                        }>
                            Сохранить
                        </button>
                    </footer>
                </section>
                : null}
        </section>
    )
}