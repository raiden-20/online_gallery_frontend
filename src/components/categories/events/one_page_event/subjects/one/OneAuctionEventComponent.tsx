import {useRouter} from "next/navigation";
import {MAIN_PATHS} from "@/paths/main";
import works_profile_scss from "@/scss/components/profile/categories/WorksProfile.module.scss";
import {
    OneWorkCategoriesMainPhoto
} from "@/components/categories/works/works/one_work/category/elements/OneWorkCategoriesMainPhoto";
import {OneWorkWhoBuy} from "@/components/categories/works/works/one_work/category/elements/OneWorkWhoBuy";
import {
    OneAuctionCategoriesTime
} from "@/components/categories/works/auctions/one_auction/category/elements/OneAuctionCategoriesTime";
import {
    OneWorkCategoriesData
} from "@/components/categories/works/works/one_work/category/elements/OneWorkCategoriesData";
import {
    OneWorkCategoriesPrice
} from "@/components/categories/works/works/one_work/category/elements/OneWorkCategoriesPrice";
import {AuctionCategoriesInterface} from "@/interfaces/auctionInterface";
import {EventSubjectsInterface} from "@/interfaces/eventInterface";


interface oneWorkInterface {
    oneAuction: EventSubjectsInterface
}

export const OneAuctionEventComponent = (props: oneWorkInterface) => {
    const router = useRouter()
    const toOneArt = () => {
        router.push(MAIN_PATHS.AUCTION + `/${props.oneAuction.subjectId}`)
    }

    if (props.oneAuction.startDate) {
        return (
            <section className={works_profile_scss.one_work}
                     onClick={toOneArt}>
                <section className={works_profile_scss.img_section}>
                    <OneWorkCategoriesMainPhoto photoUrl={props.oneAuction.photoUrl}/>
                    <OneWorkWhoBuy customerId={props.oneAuction.customerId}
                                   avatarUrl={props.oneAuction.customerUrl}
                                   customerName={props.oneAuction.customerName}/>
                </section>
                <OneAuctionCategoriesTime startTime={props.oneAuction.startDate.toISOString()}
                                          endTime={props.oneAuction.endDate.toISOString()}
                                          status={props.oneAuction.status}/>
                <OneWorkCategoriesData artistName={props.oneAuction.artistName}
                                       name={props.oneAuction.subjectName}/>
                {/*<OneWorkCategoriesPrice price={props.oneAuction.lastPrice}/>*/}
            </section>
        )
    }
}