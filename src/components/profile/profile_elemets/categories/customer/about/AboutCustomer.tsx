import about_artist_scss from '@/scss/components/profile/categories/AboutArtist.module.scss'
import {useState} from "react";

interface AboutInterface {
    input_description: string

    setInput_description(input_description: string): void
}

export const AboutCustomer = (props: AboutInterface) => { // todo добавить description

    const [isClicked, setIsClicked] = useState(false)

    return (
        <section className={about_artist_scss.root}>
            {isClicked ?
                <textarea placeholder={'Введите информацию о себе'}>{props.input_description}</textarea>
                :
                <p onClick={() => setIsClicked(true)}>{props.input_description}</p>
            }
        </section>
    )
}