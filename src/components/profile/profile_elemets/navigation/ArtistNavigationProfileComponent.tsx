import nav_profile_scss from '@/scss/components/profile/Navigation.module.scss'

export interface ProfileNavInterface {
    whoIsClicked: number
    setWhoIsClicked(whoIsClicked: number): void
}

export const ArtistNavigationProfileComponent = (props: ProfileNavInterface) => {

    return (
        <ul className={nav_profile_scss.root}>
            <li className={props.whoIsClicked === 1 ? nav_profile_scss.active : undefined}
                onClick={() => props.setWhoIsClicked(1)}>
                <button className={nav_profile_scss.button}>
                    Работы
                </button>
            </li>
            <li className={props.whoIsClicked === 2 ? nav_profile_scss.active : undefined}
                onClick={() => props.setWhoIsClicked(2)}>
                <button className={nav_profile_scss.button}>
                    Аукционы
                </button>
            </li>
            <li className={props.whoIsClicked === 3 ? nav_profile_scss.active : undefined}
                onClick={() => props.setWhoIsClicked(3)}>
                <button className={nav_profile_scss.button}>
                    Посты
                </button>
            </li>
            <li className={props.whoIsClicked === 4 ? nav_profile_scss.active : undefined}
                onClick={() => {
                    props.setWhoIsClicked(4)}

                }>
                <button className={nav_profile_scss.button}>
                    О себе
                </button>
            </li>
        </ul>
    )
}