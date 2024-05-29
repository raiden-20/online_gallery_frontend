import works_profile_scss from "@/scss/components/profile/categories/WorksProfile.module.scss";
import React from "react";
import {
    OneAuctionCategoriesComponent
} from "@/components/categories/works/auctions/one_auction/category/OneAuctionCategoriesComponent";
import {AuctionCategoriesInterface} from "@/interfaces/auctionInterface";
interface workInterface {
    auctions: AuctionCategoriesInterface[]

}

export const AuctionsComponent = (props: workInterface) => {
    return (
        <ul className={works_profile_scss.root}>
            {props.auctions.map((oneAuction, index) => {
                return (
                    <li key={index}>
                        <OneAuctionCategoriesComponent oneAuction={oneAuction}/>
                    </li>
                )
            })}
        </ul>
    )
}