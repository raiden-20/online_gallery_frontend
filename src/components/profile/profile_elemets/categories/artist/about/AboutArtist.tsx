import about_artist_scss from '@/scss/components/profile/categories/AboutArtist.module.scss'
import {useState} from "react";

import saled_paintings_icon from '@/assets/icons/profile/artist_info/saled_paintings.svg'
import count_saled_icon from '@/assets/icons/profile/artist_info/count_saled.svg'
import subscribers_icon from '@/assets/icons/profile/artist_info/subscribers.svg'
import Image from "next/image";

interface AboutInterface {
    input_description: string

    setInput_description(input_description: string): void
}

interface info {
    icon: string
    title: string
    data: string
}

export const AboutArtist = (props: AboutInterface) => {
    const info: info[] = [
        {icon: saled_paintings_icon, title: 'Проданные картины', data: '10'},
        {icon: count_saled_icon, title: 'Сумма продаж', data: '100000 ₽'},
        {icon: subscribers_icon, title: 'Платные подписчики', data: '100'},

    ]

    const [isClicked, setIsClicked] = useState(false)

    return (
        <section className={about_artist_scss.root}>
            {isClicked ?
                <textarea placeholder={'Введите информацию о себе'}>{props.input_description}</textarea>
                :
                <p onClick={() => setIsClicked(true)}>{props.input_description}</p>
            }
            <section className={about_artist_scss.info_section}>
                {info.map((one_info: info) => {
                    return (
                        <section className={about_artist_scss.one_info}>
                            <Image src={one_info.icon} alt={'icon'} className={about_artist_scss.icon}/>
                            <div>{one_info.title}</div>
                            <div>{one_info.data}</div>
                        </section>
                    )
                })}
            </section>
        </section>
    )
}