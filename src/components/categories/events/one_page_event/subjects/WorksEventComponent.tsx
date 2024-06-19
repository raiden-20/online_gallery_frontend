import works_profile_scss from "@/scss/components/profile/categories/WorksProfile.module.scss";
import React from "react";
import {OneWorkEventComponent} from "@/components/categories/events/one_page_event/subjects/one/OneWorkEventComponent";
import {EventSubjectsInterface} from "@/interfaces/eventInterface";

interface workInterface {
    arts: EventSubjectsInterface[]

}

export const WorksEventComponent = (props: workInterface) => {

    return (
        <ul className={works_profile_scss.root}>
            {props.arts !== null ?
                props.arts.map((oneArt, index) => {
                return (
                    <li key={index}>
                        <OneWorkEventComponent oneWork={oneArt}/>
                    </li>
                )
            })
            : null}
        </ul>
    )
}