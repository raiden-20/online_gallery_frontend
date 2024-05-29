import about_artist_scss from '@/scss/components/profile/categories/AboutArtist.module.scss'
import {useState} from "react";

import sale_paintings_icon from '@/assets/icons/profile/artist_info/saled_paintings.svg'
import count_sale_icon from '@/assets/icons/profile/artist_info/count_saled.svg'
import subscribers_icon from '@/assets/icons/profile/artist_info/subscribers.svg'
import Image from "next/image";
import Cookies from "js-cookie";
import {CHARACTER_RESTRICTION} from "@/paths/elements";

interface AboutInterface {
    input_description: string

    setInput_description(input_description: string): void
    setIsNeedChangeData(flag: boolean): void

    isEditMobile : boolean
    setIsEditMobile(flag: boolean): void

    countSoldArts: string
    salesAmount: string
    countSubscribers: string
}

interface info {
    icon: string
    title: string
    data: string
}

export const AboutArtistComponent = (props: AboutInterface) => {
    const info: info[] = [
        {icon: sale_paintings_icon, title: 'Проданные картины', data: props.countSoldArts},
        {icon: count_sale_icon, title: 'Сумма продаж', data: props.salesAmount + ' ₽'},
        {icon: subscribers_icon, title: 'Платные подписчики', data: props.countSubscribers},

    ]

    const [isClicked, setIsClicked] = useState(false)
    return (
        <section className={about_artist_scss.root}>
            {((isClicked || props.isEditMobile) || (props.input_description === '' || props.input_description === ' ' ))&&
            (Cookies.get('currentId') === Cookies.get('customerId') || Cookies.get('currentId') === Cookies.get('artistId')) ?
                <textarea placeholder={'Введите информацию о себе'}
                          onChange={(event) => {
                              if (props.input_description.length < CHARACTER_RESTRICTION.ARTIST_DESCRIPTIONS) {
                                  props.setInput_description(event.target.value)
                                  props.setIsNeedChangeData(true)
                              }
                          }
                }>{props.input_description}</textarea>
                :
                <p onClick={() => setIsClicked(true)}>{props.input_description}</p>
            }
            <section className={about_artist_scss.info_section}>
                {info.map((one_info: info, index) => {
                    if (one_info.data === null) {
                        return (
                            <section className={about_artist_scss.one_info + ' ' + about_artist_scss.non} key={index}>
                                <div>Запрещенные данные</div>
                                <div></div>
                            </section>
                        )
                    } else {
                        return (
                            <section className={about_artist_scss.one_info} key={index}>
                                <Image src={one_info.icon} alt={'icon'} className={about_artist_scss.icon}/>
                                <div>{one_info.title}</div>
                                <div>{one_info.data}</div>
                            </section>
                        )
                    }

                })}
            </section>
        </section>
    )
}