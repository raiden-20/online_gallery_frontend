import works_profile_scss from "@/scss/components/profile/categories/WorksProfile.module.scss";
import auction_profile_scss from '@/scss/components/categories/Auction.module.scss'
import {MAIN_PATHS} from "@/paths/main";
import {useRouter} from "next/navigation";
import {useState} from "react";
import {ArtArtistInterface} from "@/interfaces/artInterface";

import star_icon from '@/assets/icons/art/star.svg'
import Image from "next/image";
import zamok_icon from '@/assets/icons/art/zamok.svg'
import {OneWorkWhoBuy} from "@/components/categories/works/works/one_work/category/elements/OneWorkWhoBuy";
import {OneWorkExclusive} from "@/components/categories/works/works/one_work/category/elements/OneWorkExclusive";

interface oneWorkInterface {
    oneArt: ArtArtistInterface
    artistName: string
}

export const OneAuctionArtistProfileComponent = (props: oneWorkInterface) => {
    const router = useRouter()

    const [isHoverWhoBuy, setIsHoverWhoBuy] = useState(false)
    const [isHoverStar, setIsHoveStart] = useState(false)
    const toOneArt = () => {
        if (props.oneArt.available) {
            router.push(MAIN_PATHS.AUCTION + `/${props.oneArt.artId}`)
        }
    }

    return (
        <section className={auction_profile_scss.one_work}
                 onClick={toOneArt}>
            <section className={auction_profile_scss.img_section}>
                <img src={props.oneArt.photoUrl}
                     className={auction_profile_scss.img}
                     alt={'one work'}
                     crossOrigin="anonymous"/>
                <OneWorkWhoBuy customerId={props.oneArt.customerId}
                               avatarUrl={props.oneArt.avatarUrl}
                               customerName={props.oneArt.customerName}/>
                <OneWorkExclusive isPrivate={props.oneArt.isPrivate} customerId={props.oneArt.customerId}/>
            </section>
            <section className={auction_profile_scss.one_work_names}>
                <section className={auction_profile_scss.name}>{props.oneArt.name + ', 2024'}</section>
                <section className={auction_profile_scss.materials_tags}>
                    <section>Масло, холст</section>
                    <section>20 x 30 см</section>
                </section>
            </section>
            <section className={auction_profile_scss.time}>
                <section>до 20:00 МСК</section>
            </section>
            <section className={auction_profile_scss.price_section}>
                <section className={auction_profile_scss.price}>{props.oneArt.price} ₽</section>
                <section className={auction_profile_scss.materials_tags}>
                    <section>3 ставки</section>
                </section>
            </section>

        </section>
    )
}