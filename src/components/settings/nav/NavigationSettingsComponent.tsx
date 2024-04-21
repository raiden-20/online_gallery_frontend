import nav_profile_scss from "@/scss/components/profile/Navigation.module.scss";
export const NavigationSettingsComponent = (props: {setWhoIsClicked(whoIsClicked: number): void, whoIsClicked: number}) => {

    return (
        <ul className={nav_profile_scss.root}>
            <li className={props.whoIsClicked === 1 ? nav_profile_scss.active : undefined}
                onClick={() => props.setWhoIsClicked(1)}>
                <button className={nav_profile_scss.button}>
                    Аккаунт
                </button>
            </li>
            <li className={props.whoIsClicked === 2 ? nav_profile_scss.active : undefined}
                onClick={() => props.setWhoIsClicked(2)}>
                <button className={nav_profile_scss.button}>
                    Адрес доставки
                </button>
            </li>
            <li className={props.whoIsClicked === 3 ? nav_profile_scss.active : undefined}
                onClick={() => props.setWhoIsClicked(3)}>
                <button className={nav_profile_scss.button}>
                    Способы оплаты
                </button>
            </li>
        </ul>
    )
}