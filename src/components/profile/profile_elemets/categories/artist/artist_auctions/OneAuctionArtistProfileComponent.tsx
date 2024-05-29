import auction_profile_scss from '@/scss/components/categories/auctions/Auction.module.scss'
import {MAIN_PATHS} from "@/paths/main";
import {useRouter} from "next/navigation";
import {useState} from "react";
import {OneWorkWhoBuy} from "@/components/categories/works/works/one_work/category/elements/OneWorkWhoBuy";
import {AuctionCategoriesInterface} from "@/interfaces/auctionInterface";
import {
    OneAuctionCategoriesTime
} from "@/components/categories/works/auctions/one_auction/category/elements/OneAuctionCategoriesTime";

interface oneWorkInterface {
    oneAuction: AuctionCategoriesInterface
}

export const OneAuctionArtistProfileComponent = (props: oneWorkInterface) => {
    const router = useRouter()

    const [isHoverWhoBuy, setIsHoverWhoBuy] = useState(false)

    const toOneAuction = () => {
        router.push(MAIN_PATHS.AUCTION + `/${props.oneAuction.auctionId}`)
    }

    return (
        <section className={auction_profile_scss.one_work}
                 onClick={toOneAuction}>
            <section className={auction_profile_scss.img_section}>
                <img src={props.oneAuction.photoUrl}
                     className={auction_profile_scss.img}
                     alt={'one work'}
                     crossOrigin="anonymous"/>
                <OneWorkWhoBuy customerId={props.oneAuction.customerId}
                               avatarUrl={props.oneAuction.customerUrl}
                               customerName={props.oneAuction.customerName}/>
            </section>
            <section className={auction_profile_scss.one_work_names}>
                <section className={auction_profile_scss.name}>{props.oneAuction.name + ', 2024'}</section>
                <section className={auction_profile_scss.materials_tags}>
                    <section>Масло, холст</section>
                    <section>20 x 30 см</section>
                </section>
            </section>
            <OneAuctionCategoriesTime startTime={props.oneAuction.startDate}
                                      endTime={props.oneAuction.endDate}
                                      status={props.oneAuction.status}/>
            <section className={auction_profile_scss.price_section}>
                <section className={auction_profile_scss.price}>{props.oneAuction.lastPrice} ₽</section>
                <section className={auction_profile_scss.materials_tags}>
                    <section>{props.oneAuction.rateCount} ставки</section>
                </section>
            </section>

        </section>
    )
}