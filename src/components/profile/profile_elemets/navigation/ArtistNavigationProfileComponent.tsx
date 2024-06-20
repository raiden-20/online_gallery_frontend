import nav_profile_scss from '@/scss/components/profile/Navigation.module.scss'
import {useState} from "react";
import Cookies from "js-cookie";
import {MAIN_PATHS, PATHS_CATEGORY} from "@/paths/main";
import {useRouter} from "next/navigation";

interface ProfileNavInterface {
    isPrivateSubscribe: boolean
    countSubscribers: string
    whoIsClicked: number
    setWhoIsClicked(whoIsClicked: number): void
}

export const ArtistNavigationProfileComponent = (props: ProfileNavInterface) => {
    const router = useRouter()

    const elements: {title: string}[] = [
        {title: 'Работы'},
        {title: 'Аукционы'},
        {title: 'Посты'},
        {title: 'О себе'}]

    const [currentId] = useState(Cookies.get('currentId') as string)
    const [artistId] = useState(Cookies.get('artistId') as string)

    return (
        <ul className={nav_profile_scss.root}>
            {elements.map((oneElement: {title: string}, index) => {
                if (index === 2) {
                    if (artistId === currentId || props.isPrivateSubscribe) {
                        return (
                            <li className={props.whoIsClicked === index + 1 ? nav_profile_scss.active : undefined}
                                onClick={() => {
                                    props.setWhoIsClicked(index + 1)
                                }}
                                key={index}>
                                <button className={nav_profile_scss.button}>
                                    {oneElement.title}
                                </button>
                            </li>
                        )
                    }
                } else {
                    return (
                        <li className={props.whoIsClicked === index + 1 ? nav_profile_scss.active : undefined}
                            onClick={() => {
                                props.setWhoIsClicked(index + 1)
                            }} key={index}>
                            <button className={nav_profile_scss.button}>
                                {oneElement.title}
                            </button>
                        </li>
                    )
                }
            })}
        </ul>
    )
}