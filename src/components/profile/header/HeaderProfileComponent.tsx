import header_profile_scss from '@/app/scss/components/profile/HeaderProfile.module.scss'
import Image from "next/image";
import default_cover_profile from '@/app/assets/default/default_cover_profile.svg'
import default_avatar_profile from '@/app/assets/default/default_avatar_profile.svg'
import bell_icon from '@/app/assets/icons/profile/bell_icon.svg'
import change_cover from '@/app/assets/icons/profile/change_cover.svg'
import change_avatar from '@/app/assets/icons/profile/change_avatar.svg'
import important from '@/app/assets/icons/profile/important.svg'

import {useState} from "react";


export const HeaderProfileComponent = () => {
    const [isCoverHover, setIsCoverHover] = useState(false)
    const [isAvatarHover, setIsAvatarHover] = useState(false)

    const [isNameClicked, setIsNameClicked] = useState(false)

    const [isNeedChangeData, setIsNeedChangeData] = useState(true) // будет useEffect который будет реагировать при смене любого из 3х параметров


    return (
        <section className={header_profile_scss.page}>
            <section className={header_profile_scss.root}>
                <section className={header_profile_scss.cover_section}
                         onMouseOver={() => setIsCoverHover(true)}
                         onMouseLeave={() => setIsCoverHover(false)}>
                    <Image src={default_cover_profile} className={header_profile_scss.cover}
                           alt={'default_cover_profile'} width={0} height={0}/>
                    {isCoverHover ?
                        <section className={header_profile_scss.change_cover}>
                            <button>
                                <input className={header_profile_scss.hidden} type="file" id="setCover"/>
                                <label htmlFor="setCover">
                                    <Image src={change_cover} alt={'change_cover'}/>
                                </label>
                            </button>
                        </section>
                        : null}
                </section>
                <section className={header_profile_scss.profile_data}>
                    <section className={header_profile_scss.avatar_section}
                             onMouseOver={() => setIsAvatarHover(true)}
                             onMouseLeave={() => setIsAvatarHover(false)}>
                        <Image src={default_avatar_profile} className={header_profile_scss.avatar}
                               alt={'default_avatar_profile'} width={0} height={0}/>
                        {isAvatarHover ?
                            <section className={header_profile_scss.change_avatar}>
                                <button>
                                    <input className={header_profile_scss.hidden} type="file" id="setAvatar"/>
                                    <label htmlFor="setAvatar">
                                        <Image src={change_avatar} alt={'change_cover'} width={0} height={0}/>
                                    </label>
                                </button>
                            </section>
                            : null
                        }
                    </section>
                    <section>
                        {isNameClicked ?
                            <input value={'Linko'}/>
                            :
                            <button className={header_profile_scss.name}
                                    onClick={() => setIsNameClicked(true)}>
                                Linko
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
            {isNeedChangeData ?
                <section className={header_profile_scss.change_data_window}>
                    <section className={header_profile_scss.change_data_window_data}>
                        <Image src={important} alt={'important'} width={0} height={0}/>
                        <div>Сохранить изменения?</div>
                    </section>
                    <footer className={header_profile_scss.change_data_window_buttons}>
                        <button className={'cancel_button'}>
                            Отменить
                        </button>
                        <button className={'main_button'}>
                            Сохранить
                        </button>
                    </footer>
                </section>
                : null}
        </section>
    )
}