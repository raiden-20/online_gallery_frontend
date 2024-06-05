import works_profile_scss from "@/scss/components/profile/categories/WorksProfile.module.scss";
import {
    OneWorkCategoriesComponent
} from "@/components/categories/works/works/one_work/category/OneWorkCategoriesComponent";
import React from "react";
import {OneWorkEventComponent} from "@/components/categories/events/one_page_event/subjects/one/OneWorkEventComponent";
import {ArtShortInterface} from "@/interfaces/artInterface";
import {EventSubjectsInterface} from "@/interfaces/eventInterface";

interface workInterface {
    arts: EventSubjectsInterface[]

}

export const WorksEventComponent = (props: workInterface) => {

    return (
        <ul className={works_profile_scss.root}>
            {props.arts.map((oneArt, index) => {
                return (
                    <li key={index}>
                        <OneWorkEventComponent oneWork={oneArt}/>
                    </li>
                )
            })}
        </ul>
    )
}