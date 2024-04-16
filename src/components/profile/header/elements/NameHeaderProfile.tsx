import header_profile_scss from "@/scss/components/profile/HeaderProfile.module.scss";
import React, {useState} from "react";
import Cookies from "js-cookie";

interface nameHeaderProfileInterface {
    input_name: string
    isNameClicked: boolean
    setInput_name(input_name: string): void
    setIsNeedChangeData(flag: boolean): void
    setIsNameClicked(isNameClicked: boolean): void
}

export const NameHeaderProfile = (props: nameHeaderProfileInterface) => {

    const [currentId] = useState(Cookies.get('currentId'))
    const [artistId] = useState(Cookies.get('artistId'))
    const [customerId] = useState(Cookies.get('customerId'))
    const [status] = useState(Cookies.get('status'))

    return (
        <section className={header_profile_scss.name_section}>
            {props.isNameClicked && status && (currentId === customerId || currentId === artistId) ?
                <input value={props.input_name}
                       onChange={(event) => {
                           props.setInput_name(event.target.value)
                           props.setIsNeedChangeData(true)
                       }}/>
                :
                <button className={header_profile_scss.name}
                        onClick={() => props.setIsNameClicked(true)}>
                    {props.input_name}
                </button>
            }
        </section>
    )
}