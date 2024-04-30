import works_profile_scss from "@/scss/components/profile/categories/WorksProfile.module.scss";
import {MAIN_PATHS} from "@/paths/main";
import {useRouter} from "next/navigation";
import {useState} from "react";
import {ArtShortInterface} from "@/interfaces/artInterface";
import star_icon from '@/assets/icons/art/star.svg'
import Image from "next/image";

interface oneWorkInterface {
    oneArt: ArtShortInterface
}

export const OneWorkCategoriesComponent = (props: oneWorkInterface) => {

    const router = useRouter()

    const [isHoverWhoBuy, setIsHoverWhoBuy] = useState(false)
    const [isHoverStar, setIsHoveStart] = useState(false)


    const toOneArt = () => {
        router.push(MAIN_PATHS.ONE_ART + `/${props.oneArt.artId}`)
    }

    return (
        <section className={works_profile_scss.one_work}
                 onClick={toOneArt}>
            <section className={works_profile_scss.img_section}>
                <img src={props.oneArt.photoUrl} className={works_profile_scss.one_work_img}
                     alt={'one work'}
                     crossOrigin="anonymous"/>
                {props.oneArt.customerId !== null ?
                    <section className={works_profile_scss.who_buy_section}
                             onMouseEnter={() => setIsHoverWhoBuy(true)}
                             onMouseLeave={() => setIsHoverWhoBuy(false)}>
                        <section className={works_profile_scss.who_buy_data}>
                            <img src={props.oneArt.avatarUrl === '' || props.oneArt.avatarUrl === ' ' ? '/default_avatar_profile.svg' : props.oneArt.avatarUrl}
                                 alt={'avatar'} crossOrigin={"anonymous"}/>
                            <div className={!isHoverWhoBuy ? works_profile_scss.who_buy_name_hide : undefined}>
                                {props.oneArt.customerName === 'anonymous' ? 'Анонимный покупатель' : props.oneArt.customerName}
                            </div>
                        </section>
                    </section>
                    : null
                }
                {props.oneArt.isPrivate && props.oneArt.customerId !== null ?
                <section className={works_profile_scss.who_buy_section + ' ' + works_profile_scss.star_section}
                         onMouseEnter={() => setIsHoveStart(true)}
                         onMouseLeave={() => setIsHoveStart(false)}>
                    <section className={works_profile_scss.who_buy_data}>
                        <Image src={star_icon} alt={'star'} width={0} height={0}/>
                        <div className={!isHoverStar ? works_profile_scss.who_buy_name_hide : undefined}>
                            Только для поддержавших
                        </div>
                    </section>
                </section> : null
                }
            </section>
            <section className={works_profile_scss.one_work_names}>
                <div className={works_profile_scss.one_work_weight}>{props.oneArt.artistName}</div>
                <div>{props.oneArt.name}</div>
            </section>
            <div className={works_profile_scss.one_work_weight}>{props.oneArt.price} ₽</div>
        </section>
    )
}