import header_profile_scss from '@/scss/components/profile/HeaderProfile.module.scss'
import Image from "next/image";
import default_cover_profile from '@/assets/default/default_cover_profile.svg'
import default_avatar_profile from '@/assets/default/default_avatar_profile.svg'
import bell_icon from '@/assets/icons/profile/bell_icon.svg'
import change_cover from '@/assets/icons/profile/change_cover.svg'
import change_avatar from '@/assets/icons/profile/change_avatar.svg'
import important from '@/assets/icons/profile/important.svg'

import delete_photo from '@/assets/icons/profile/delete_photo.svg'

import React, {useState} from "react";

interface HeaderProfileInterface {
    input_coverUrl: string,
    input_avatarUrl: string,
    input_name: string,
    isNeedChangeData: boolean

    setInput_name(input_name: string): void
    changeInputCover(event: React.ChangeEvent<HTMLInputElement>): void
    changeInputAvatar(event: React.ChangeEvent<HTMLInputElement>): void
    setIsChangeDataClicked(isChangeDataClicked: boolean): void
    cancelChanging(): void

    deleteAvatar(): void
    deleteCover(): void
}

export const HeaderProfileComponent = (props: HeaderProfileInterface) => {
    const [isCoverHover, setIsCoverHover] = useState(false)
    const [isAvatarHover, setIsAvatarHover] = useState(false)
    const [isNameClicked, setIsNameClicked] = useState(false)

    return (
        <section className={header_profile_scss.page}>
            <section className={header_profile_scss.root}>
                <section className={header_profile_scss.cover_section}
                         onMouseOver={() => setIsCoverHover(true)}
                         onMouseLeave={() => setIsCoverHover(false)}>
                    <Image src={props.input_coverUrl === '' ? default_cover_profile : props.input_coverUrl}
                           className={header_profile_scss.cover}
                           alt={'default_cover_profile'} width={0} height={0}/>
                    {isCoverHover ?
                        <section className={header_profile_scss.change_cover}>
                            <button>
                                <input className={header_profile_scss.hidden} type="file" id="setCover"
                                       onChange={(event) => props.changeInputCover(event)}/>
                                <label htmlFor="setCover">
                                    <Image src={change_cover} alt={'change_cover'} width={0} height={0}/>
                                </label>
                            </button>
                            <button onClick={() => props.deleteCover()}>
                                <Image src={delete_photo} alt={'delete_photo'} width={0} height={0}/>
                            </button>
                        </section>
                        : null}
                </section>
                <section className={header_profile_scss.profile_data}>
                    <section className={header_profile_scss.avatar_section}
                             onMouseOver={() => setIsAvatarHover(true)}
                             onMouseLeave={() => setIsAvatarHover(false)}>
                        <Image src={props.input_avatarUrl === '' ? default_avatar_profile : props.input_avatarUrl}
                               className={header_profile_scss.avatar}
                               alt={'default_avatar_profile'} width={0} height={0}/>
                        {isAvatarHover ?
                            <section className={header_profile_scss.change_avatar}>
                                <button>
                                    <input className={header_profile_scss.hidden} type="file" id="setAvatar"
                                           onChange={(event) => props.changeInputAvatar(event)}/>
                                    <label htmlFor="setAvatar">
                                        <Image src={change_avatar} alt={'change_cover'} width={0} height={0}/>
                                    </label>
                                </button>
                                <button onClick={() => props.deleteAvatar()}>
                                    <Image src={delete_photo} className={header_profile_scss.delete} alt={'delete_photo'} width={0} height={0}/>
                                </button>
                            </section>
                            : null
                        }
                    </section>
                    <section>
                        {isNameClicked ?
                            <input value={props.input_name}
                                   onChange={(event) => props.setInput_name(event.target.value)}/>
                            :
                            <button className={header_profile_scss.name}
                                    onClick={() => setIsNameClicked(true)}>
                                {props.input_name}
                            </button>
                        }
                    </section>
                    <section className={header_profile_scss.subscriber_section}>
                        <button className={'main_button'}>Подписаться</button>
                        <button className={header_profile_scss.button_bell}>
                            <Image src={bell_icon} className={header_profile_scss.bell_image}
                                   alt={'bell_icon'} width={0} height={0}/>
                        </button>
                    </section>
                </section>
            </section>
            {props.isNeedChangeData ?
                <section className={header_profile_scss.change_data_window}>
                    <section className={header_profile_scss.change_data_window_data}>
                        <Image src={important} alt={'important'} width={0} height={0}/>
                        <div>Сохранить изменения?</div>
                    </section>
                    <footer className={header_profile_scss.change_data_window_buttons}>
                        <button className={'cancel_button'} onClick={() => props.cancelChanging()}>
                            Отменить
                        </button>
                        <button className={'main_button'} onClick={() => {
                            setIsNameClicked(false)
                            props.setIsChangeDataClicked(true)}
                        }>
                            Сохранить
                        </button>
                    </footer>
                </section>
                : null}
        </section>
    )
}