import nav_profile_scss from "@/scss/components/profile/Navigation.module.scss";
import {useRouter} from "next/navigation";
import {MAIN_PATHS} from "@/paths/main";
export const NavigationSettingsComponent = (props: {whoIsClicked: number}) => {
    const router = useRouter()
    return (
        <ul className={nav_profile_scss.root}>
            <li className={props.whoIsClicked === 1 ? nav_profile_scss.active : undefined}
                onClick={() => {
                    router.push(MAIN_PATHS.SETTINGS)
                }}
                key={0}>
                <button className={nav_profile_scss.button}>
                    Аккаунт
                </button>
            </li>
            <li className={props.whoIsClicked === 2 ? nav_profile_scss.active : undefined}
                onClick={() => router.push(MAIN_PATHS.ADDRESSES)} key={1}>
                <button className={nav_profile_scss.button}>
                    Адрес доставки
                </button>
            </li>
            <li className={props.whoIsClicked === 3 ? nav_profile_scss.active : undefined}
                onClick={() => router.push(MAIN_PATHS.CARDS)} key={2}>
                <button className={nav_profile_scss.button}>
                    Способы оплаты
                </button>
            </li>
        </ul>
    )
}