import nav_profile_scss from '@/scss/components/profile/Navigation.module.scss'
import {useState} from "react";
import Cookies from "js-cookie";

interface ProfileNavInterface {
    countSubscribers: string
    whoIsClicked: number
    setWhoIsClicked(whoIsClicked: number): void
}

export const ArtistNavigationProfileComponent = (props: ProfileNavInterface) => {
    const elements = ['Работы', 'Аукционы', 'Посты', 'О себе']

    const [currentId] = useState(Cookies.get('currentId') as string)
    const [artistId] = useState(Cookies.get('artistId') as string)

    return (
        <ul className={nav_profile_scss.root}>
            {elements.map((oneElement: string, index) => {
                if (index === 2) {
                    if (artistId === currentId && props.countSubscribers !== null) {
                        return (
                            <li className={props.whoIsClicked === index + 1 ? nav_profile_scss.active : undefined}
                                onClick={() => props.setWhoIsClicked(index + 1)} key={index}>
                                <button className={nav_profile_scss.button}>
                                    {oneElement}
                                </button>
                            </li>
                        )
                    }
                    return (
                        <li className={props.whoIsClicked === index + 1 ? nav_profile_scss.active : undefined}
                            onClick={() => props.setWhoIsClicked(index + 1)} key={index}>
                            <button className={nav_profile_scss.button}>
                                {oneElement}
                            </button>
                        </li>
                    )
                }
                return (
                    <li className={props.whoIsClicked === index + 1 ? nav_profile_scss.active : undefined}
                        onClick={() => props.setWhoIsClicked(index + 1)} key={index}>
                        <button className={nav_profile_scss.button}>
                            {oneElement}
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}