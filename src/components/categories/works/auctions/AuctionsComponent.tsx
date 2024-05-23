import works_profile_scss from "@/scss/components/profile/categories/WorksProfile.module.scss";
import {ArtShortInterface} from "@/interfaces/artInterface";
import React from "react";
import {
    OneAuctionCategoriesComponent
} from "@/components/categories/works/auctions/one_auction/category/OneAuctionCategoriesComponent";
interface workInterface {
    arts: ArtShortInterface[]

}

export const AuctionsComponent = (props: workInterface) => {

    return (
        <ul className={works_profile_scss.root}>
            {props.arts.map((oneArt: ArtShortInterface, index) => {
                return (
                    <li key={index}>
                        <OneAuctionCategoriesComponent oneArt={oneArt}/>
                    </li>
                )
            })}
        </ul>
    )
}