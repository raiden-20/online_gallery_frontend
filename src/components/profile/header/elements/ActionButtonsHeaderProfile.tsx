import {ROLES} from "@/paths/main";
import header_profile_scss from "@/scss/components/profile/HeaderProfile.module.scss";
import {signIn} from "next-auth/react";
import Cookies from "js-cookie";
import Image from "next/image";
import bell_icon from "@/assets/icons/profile/bell_icon.svg";
import art_icon from "@/assets/icons/profile/art.svg";
import create_post_icon from "@/assets/icons/profile/create_post.svg";
import React, {useState} from "react";
import {CreatePostProfile} from "@/components/profile/profile_elemets/create_post/CreatePostProfile";

export const ActionButtonsHeaderProfile = () => {

    const [artistId] = useState(Cookies.get('artistId'))
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
                        Подписаться
                    </button>
                    <button className={header_profile_scss.button_bell}>
                        <Image src={bell_icon} className={header_profile_scss.bell_image}
                               alt={'bell_icon'} width={0} height={0}/>
                    </button>
                </section>
                :
                artistId && artistId === currentId && currentRole === ROLES.ARTIST ?
                    <section className={header_profile_scss.artist_action_section}>
                        <button className={'main_button ' + header_profile_scss.subscriber_section}>
                            <Image src={art_icon} alt={'art_icon'}/>
                            <div>Выставить работу</div>
                        </button>
                        <button className={'cancel_button ' + header_profile_scss.subscriber_section}
                                onClick={() => setIsCreatePost(true)}>
                            <Image src={create_post_icon} alt={'create_post_icon'}/>
                            <div>Написать пост</div>
                        </button>
                    </section>
                    : null
            }

            {isCreatePost ?
                <CreatePostProfile setIsCreatePost={setIsCreatePost}/>
                : null}
        </section>
    )
}