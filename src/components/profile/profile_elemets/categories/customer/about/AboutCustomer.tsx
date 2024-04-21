import about_artist_scss from '@/scss/components/profile/categories/AboutArtist.module.scss'
import {useState} from "react";

interface AboutInterface {
    input_description: string

    setInput_description(input_description: string): void
    setIsNeedChangeData(flag: boolean): void

    isEditMobile : boolean
    setIsEditMobile(flag: boolean): void
}

export const AboutCustomer = (props: AboutInterface) => {

    const [isClicked, setIsClicked] = useState(false)

    console.log(typeof props.input_description)

    return (
        <section className={about_artist_scss.root}>
            {(isClicked || props.isEditMobile) || props.input_description === '' ?
                <textarea placeholder={'Введите информацию о себе'}
                onChange={(event) => {
                    if (props.input_description.length < 200) {
                        props.setInput_description(event.target.value)
                        props.setIsNeedChangeData(true)
                    }
                }}>{props.input_description}</textarea>
                :
                <p onClick={() => setIsClicked(true)}>{props.input_description}</p>
            }
        </section>
    )
}