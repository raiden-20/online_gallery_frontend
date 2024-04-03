import {useState} from "react";
import nav_profile_scss from "@/scss/components/profile/Navigation.module.scss";
import {ProfileNavInterface} from "@/components/profile/profile_elemets/navigation/ArtistNavigationProfileComponent";

export const CustomerNavigationProfileComponent = (props: ProfileNavInterface) => {

    return (
        <ul className={nav_profile_scss.root}>
            <li className={props.whoIsClicked === 1 ? nav_profile_scss.active : undefined}
                onClick={() => props.setWhoIsClicked(1)}>
                <button className={nav_profile_scss.button}>
                    Коллекция
                </button>
            </li>
            <li className={props.whoIsClicked === 2 ? nav_profile_scss.active : undefined}
                onClick={() => props.setWhoIsClicked(2)}>
                <button className={nav_profile_scss.button}>
                    О себе
                </button>
            </li>
        </ul>
    )
}