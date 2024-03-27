import {useState} from "react";
import nav_profile_scss from "@/app/scss/components/profile/Navigation.module.scss";

export const CustomerNavigationProfileComponent = () => {
    const [whoIsClicked, setWhoIsClicked] = useState(1)

    return (
        <ul className={nav_profile_scss.root}>
            <li className={whoIsClicked === 1 ? nav_profile_scss.active : undefined}
                onClick={() => setWhoIsClicked(1)}>
                <button className={nav_profile_scss.button}>
                    Коллекция
                </button>
            </li>
            <li className={whoIsClicked === 2 ? nav_profile_scss.active : undefined}
                onClick={() => setWhoIsClicked(2)}>
                <button className={nav_profile_scss.button}>
                    О себе
                </button>
            </li>
        </ul>
    )
}