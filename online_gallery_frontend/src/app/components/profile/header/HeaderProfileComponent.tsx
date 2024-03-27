import header_profile_scss from '@/app/scss/components/profile/HeaderProfile.module.scss'
import Image from "next/image";
import default_cover_profile from '@/app/assets/default/default_cover_profile.svg'
import default_avatar_profile from '@/app/assets/default/default_avatar_profile.svg'
import bell_icon from '@/app/assets/icons/profile/bell_icon.svg'


export const HeaderProfileComponent = () => {
    return (
        <section className={header_profile_scss.root}>
            <section className={header_profile_scss.cover_section}>
                <Image src={default_cover_profile} className={header_profile_scss.cover}
                       alt={'default_cover_profile'} width={0} height={0}/>
            </section>
            <section className={header_profile_scss.profile_data}>
                <section className={header_profile_scss.avatar_section}>
                    <Image src={default_avatar_profile}  className={header_profile_scss.avatar}
                           alt={'default_avatar_profile'} width={0} height={0}/>
                </section>
                <div className={header_profile_scss.name}>Linko</div>
                <section className={header_profile_scss.subscriber_section}>
                    <button className={'main_button'}>Подписаться</button>
                    <button className={header_profile_scss.button_bell}>
                        <Image src={bell_icon} className={header_profile_scss.bell_image}
                        alt={'bell_icon'} width={0} height={0}/>
                    </button>
                </section>
            </section>
        </section>
    )
}