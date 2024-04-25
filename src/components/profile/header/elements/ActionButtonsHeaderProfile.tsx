import {MAIN_PATHS, ROLES} from "@/paths/main";
import header_profile_scss from "@/scss/components/profile/HeaderProfile.module.scss";
import {signIn} from "next-auth/react";
import Cookies from "js-cookie";
import Image from "next/image";
import bell_icon from "@/assets/icons/profile/bell_icon.svg";
import art_icon from "@/assets/icons/profile/art.svg";
import create_post_icon from "@/assets/icons/profile/create_post.svg";
import edit_profile_icon from '@/assets/icons/profile/edit_profile.svg'
import React, {useState} from "react";
import {CreatePostProfile} from "@/components/profile/profile_elemets/categories/artist/posts/create_post/CreatePostProfile";
import {useRouter} from "next/navigation";

interface actionButtonsInterface {
    isEditMobile: boolean

    setIsEditMobile(flag: boolean): void
}

export const ActionButtonsHeaderProfile = (props: actionButtonsInterface) => {

    const router = useRouter()

    const [artistId] = useState(Cookies.get('artistId'))
    const [customerId] = useState(Cookies.get('customerId'))
    const [currentId] = useState(Cookies.get('currentId'))
    const [currentRole] = useState(Cookies.get('currentRole'))
    const [role] = useState(Cookies.get('role'))
    const [status] = useState(Cookies.get('status'))


    const [isCreatePost, setIsCreatePost] = useState(false)

    return (
        <section>
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
                        Поддержать
                    </button>
                    <button className={header_profile_scss.button_bell}>
                        <Image src={bell_icon} className={header_profile_scss.bell_image}
                               alt={'bell_icon'} width={0} height={0}/>
                    </button>
                </section>
                :
                artistId && artistId === currentId && currentRole === ROLES.ARTIST ?
                    <button className={'main_button ' + header_profile_scss.subscriber_section}
                            onClick={() => router.push(MAIN_PATHS.CREATE_ART)}>
                        <Image src={art_icon} alt={'art_icon'}/>
                        <div>Выставить работу</div>
                    </button>
                    : null
            }
            {(currentId === customerId || currentId === artistId) && !props.isEditMobile ?
                <button className={'cancel_button ' + header_profile_scss.edit_button}
                        onClick={() => props.setIsEditMobile(true)}>
                    <Image src={edit_profile_icon} alt={'edit_profile_icon'}/>
                    <div>Редактировать профиль</div>
                </button>
                : null}

            {isCreatePost ?
                <CreatePostProfile setIsCreatePost={setIsCreatePost}/>
                : null}
        </section>
    )
}