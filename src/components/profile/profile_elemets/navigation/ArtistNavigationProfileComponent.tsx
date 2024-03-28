import {useState} from "react";

import nav_profile_scss from '@/scss/components/profile/Navigation.module.scss'

export const ArtistNavigationProfileComponent = () => {
    const [whoIsClicked, setWhoIsClicked] = useState(1)

    return (
        <ul className={nav_profile_scss.root}>
            <li className={whoIsClicked === 1 ? nav_profile_scss.active : undefined}
                onClick={() => setWhoIsClicked(1)}>
                <button className={nav_profile_scss.button}>
                    Работы
                </button>
            </li>
            <li className={whoIsClicked === 2 ? nav_profile_scss.active : undefined}
                onClick={() => setWhoIsClicked(2)}>
                <button className={nav_profile_scss.button}>
                    Аукционы
                </button>
            </li>
            <li className={whoIsClicked === 3 ? nav_profile_scss.active : undefined}
                onClick={() => setWhoIsClicked(3)}>
                <button className={nav_profile_scss.button}>
                    Посты
                </button>
            </li>
            <li className={whoIsClicked === 4 ? nav_profile_scss.active : undefined}
                onClick={() => setWhoIsClicked(4)}>
                <button className={nav_profile_scss.button}>
                    О себе
                </button>
            </li>
        </ul>
    )
}