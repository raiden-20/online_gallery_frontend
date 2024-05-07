import {MAIN_PATHS, ROLES} from "@/paths/main";
import header_profile_scss from "@/scss/components/profile/HeaderProfile.module.scss";
import Cookies from "js-cookie";
import Image from "next/image";
import bell_icon from "@/assets/icons/profile/bell_icon.svg";
import bell_delete_icon from "@/assets/icons/profile/bell_delete_icon.svg";
import art_icon from "@/assets/icons/profile/art.svg";
import edit_profile_icon from '@/assets/icons/profile/edit_profile.svg'
import React, {useState} from "react";
import {useRouter} from "next/navigation";
import {signin} from "@/store/thunks/authThunk";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {PrivateSubscribeContainer} from "@/components/profile/private_subscribe/PrivateSubscribeContainer";
import {
    CreatePostContainer
} from "@/components/profile/profile_elemets/categories/artist/posts/create_post/CreatePostContainer";
import {useSession} from "next-auth/react";

interface actionButtonsInterface {
    countSubscribers: string
    isEditMobile: boolean

    isPublicSubscribe: boolean
    isPrivateSubscribe: boolean

    setIsEditMobile(flag: boolean): void

    PublicAction(id: string, router: AppRouterInstance): void
    PrivateUnsubscribe(artistId: string, router: AppRouterInstance): void
}

export const ActionButtonsHeaderProfile = (props: actionButtonsInterface) => {
    const router = useRouter()

    const [artistId] = useState(Cookies.get('artistId') as string)
    const [customerId] = useState(Cookies.get('customerId') as string)
    const [currentId] = useState(Cookies.get('currentId') as string)
    const [currentRole] = useState(Cookies.get('currentRole') as string)
    const [role] = useState(Cookies.get('role') as string)
    const {status } = useSession();

    const [isCreatePost, setIsCreatePost] = useState(false)
    const [Subscribe, setSubscribe] = useState(false)

    return (
        <section>
            {(artistId !== currentId) && role !== ROLES.ARTIST && currentRole === ROLES.ARTIST ?
                <section className={header_profile_scss.subscriber_section}>
                    {props.isPrivateSubscribe !== null && status === 'authenticated' ?
                        !props.isPrivateSubscribe && props.countSubscribers !== null ?
                        <button className={'main_button'}
                                onClick={() => {
                                    if (status === 'authenticated') {
                                        setSubscribe(true)
                                    } else {
                                        signin()
                                    }
                                }}>
                            Поддержать
                        </button>
                        :
                        <button className={'cancel_button'}
                                onClick={() => {
                                    if (status === 'authenticated') {
                                        props.PrivateUnsubscribe(currentId, router)
                                    } else {
                                        signin()
                                    }
                                }}>
                            Отменить поддержку
                        </button> : null
                    }
                    {!props.isPublicSubscribe?
                        <button className={header_profile_scss.button_bell}
                                onClick={() => {
                                    if (status === 'authenticated') {
                                        props.PublicAction(currentId, router)
                                    } else {
                                        signin()
                                    }
                                }}>
                            <Image src={bell_icon} className={header_profile_scss.bell_image}
                                   alt={'bell_icon'} width={0} height={0}/>
                        </button>
                        :
                        <button className={header_profile_scss.button_bell}
                                onClick={() => {
                                    props.PublicAction(currentId, router)
                                }}>
                            <Image src={bell_delete_icon} className={header_profile_scss.bell_image}
                                   alt={'bell_icon'} width={0} height={0}/>
                        </button>}

                </section>
                :
                artistId && artistId === currentId && currentRole === ROLES.ARTIST ?
                    <button className={'main_button ' + header_profile_scss.subscriber_section
                                        + ' ' + header_profile_scss.hidden_button}
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
                <CreatePostContainer setIsCreatePost={setIsCreatePost}/>
                : null}

            {Subscribe ?
                <PrivateSubscribeContainer setSubscribe={setSubscribe}/>
                : null}
        </section>
    )
}