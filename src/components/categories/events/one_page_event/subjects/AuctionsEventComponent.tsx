import works_profile_scss from "@/scss/components/profile/categories/WorksProfile.module.scss";
import {
    OneAuctionCategoriesComponent
} from "@/components/categories/works/auctions/one_auction/category/OneAuctionCategoriesComponent";
import React from "react";
import {AuctionCategoriesInterface} from "@/interfaces/auctionInterface";
import {EventSubjectsInterface} from "@/interfaces/eventInterface";
import {
    OneAuctionEventComponent
} from "@/components/categories/events/one_page_event/subjects/one/OneAuctionEventComponent";

interface workInterface {
    auctions: EventSubjectsInterface[]

}
export const AuctionsEventComponent = (props: workInterface) => {

    return (
        <ul className={works_profile_scss.root}>
            {props.auctions.map((oneAuction, index) => {
                return (
                    <li key={index}>
                        <OneAuctionEventComponent oneAuction={oneAuction}/>
                    </li>
                )
            })}
        </ul>
    )
}