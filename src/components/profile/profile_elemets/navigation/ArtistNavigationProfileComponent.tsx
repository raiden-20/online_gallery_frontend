import nav_profile_scss from '@/scss/components/profile/Navigation.module.scss'
import {NULL} from "@/paths/elements";

interface ProfileNavInterface {
    countSubscribers: string
    whoIsClicked: number
    setWhoIsClicked(whoIsClicked: number): void
}

export const ArtistNavigationProfileComponent = (props: ProfileNavInterface) => {
    const elements = ['Работы', 'Аукционы', 'Посты', 'О себе']

    return (
        <ul className={nav_profile_scss.root}>
            {elements.map((oneElement: string, index) => {
                if (index === 2 && props.countSubscribers !== NULL) {
                    return (
                        <li className={props.whoIsClicked === index + 1 ? nav_profile_scss.active : undefined}
                            onClick={() => props.setWhoIsClicked(index + 1)}>
                            <button className={nav_profile_scss.button}>
                                {oneElement}
                            </button>
                        </li>
                    )
                }
            })}
        </ul>
    )
}