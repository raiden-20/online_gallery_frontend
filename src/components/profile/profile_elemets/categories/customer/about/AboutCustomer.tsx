import about_artist_scss from '@/scss/components/profile/categories/AboutArtist.module.scss'
import {useState} from "react";
import Cookies from "js-cookie";
import {CHARACTER_RESTRICTION} from "@/paths/elements";

interface AboutInterface {
    input_description: string

    setInput_description(input_description: string): void
    setIsNeedChangeData(flag: boolean): void

    isEditMobile : boolean
    setIsEditMobile(flag: boolean): void
}

export const AboutCustomer = (props: AboutInterface) => {

    const [isClicked, setIsClicked] = useState(false)
    console.log(Cookies.get('currentId') === Cookies.get('customerId') || Cookies.get('currentId') === Cookies.get('artistId'))

    return (
        <section className={about_artist_scss.root}>
            {((isClicked || props.isEditMobile) || (props.input_description === '' || props.input_description === ' ' )) && (Cookies.get('currentId') === Cookies.get('customerId') || Cookies.get('currentId') === Cookies.get('artistId'))?
                <textarea placeholder={'Введите информацию о себе'}
                onChange={(event) => {
                    if (props.input_description.length < CHARACTER_RESTRICTION.CUSTOMER_DESCRIPTION) {
                        props.setInput_description(event.target.value)
                        props.setIsNeedChangeData(true)
                    }
                }}>{props.input_description}</textarea>
                :
                <p onClick={() => {
                    if (Cookies.get('currentId') === Cookies.get('customerId') || Cookies.get('currentId') === Cookies.get('artistId')) {
                        setIsClicked(true)
                    }
                }}>{props.input_description}</p>
            }
        </section>
    )
}