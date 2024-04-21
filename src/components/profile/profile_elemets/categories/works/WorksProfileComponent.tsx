import works_profile_scss from '@/scss/components/profile/categories/WorksProfile.module.scss'
import {OneWorkProfileComponent} from "@/components/profile/profile_elemets/categories/works/OneWorkProfileComponent";
import React, {useState} from "react";
import Cookies from "js-cookie";

import create_art_icon from '@/assets/icons/profile/create_art_button.svg'
import Image from "next/image";
export const WorksProfileComponent = () => {

    const [artistId] = useState(Cookies.get('artistId'))
    const [currentId] = useState(Cookies.get('currentId'))

    return (
        <ul className={works_profile_scss.root}>
            <li>
                <OneWorkProfileComponent/>
            </li>
            <li>
                <OneWorkProfileComponent/>
            </li>
            <li>
                <OneWorkProfileComponent/>
            </li>
            <li>
                <OneWorkProfileComponent/>
            </li>
            <li>
                <OneWorkProfileComponent/>
            </li>
            <li>
                <OneWorkProfileComponent/>
            </li>
            <li>
                <OneWorkProfileComponent/>
            </li>
            {currentId === artistId ?
                <button className={works_profile_scss.create_art_button}>
                    <Image src={create_art_icon} alt={'create_art_icon'}/>
                </button>
                : null}
        </ul>
    )
}