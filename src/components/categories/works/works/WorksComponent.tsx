import works_profile_scss from "@/scss/components/profile/categories/WorksProfile.module.scss";
import {ArtShortInterface} from "@/interfaces/artInterface";
import {OneWorkCategoriesComponent} from "@/components/categories/works/works/one_work/category/OneWorkCategoriesComponent";
import React from "react";
interface workInterface {
    arts: ArtShortInterface[]

}

export const WorksComponent = (props: workInterface) => {

    function hasValidProperties(obj: any): obj is ArtShortInterface {
        return 'artId' in obj && 'name' in obj && 'photoUrl' in obj && 'price' in obj && 'artistId' in obj &&
               'isPrivate' in obj && 'artistName' in obj && 'customerId' in obj && 'avatarUrl' in obj &&
               'customerName' in obj;
    }

    if (props.arts.length > 0) {
        return (
            <ul className={works_profile_scss.root}>
                {props.arts.map((oneArt, index) => {
                    if (hasValidProperties(oneArt)) {
                        return (
                            <li key={index}>
                                <OneWorkCategoriesComponent oneArt={oneArt}/>
                            </li>
                        )
                    }
                })}
            </ul>
        )
    } else {
        return <></>
    }
}