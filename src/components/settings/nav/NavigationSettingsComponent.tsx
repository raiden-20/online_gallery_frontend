import nav_profile_scss from "@/scss/components/profile/Navigation.module.scss";
import {useRouter} from "next/navigation";
import {MAIN_PATHS} from "@/paths/main";
export const NavigationSettingsComponent = (props: {whoIsClicked: number}) => {
    const router = useRouter()
    return (
        <section className={nav_profile_scss.root}>
            <section className={props.whoIsClicked === 1 ? nav_profile_scss.active : undefined}
                onClick={() => {
                    router.push(MAIN_PATHS.SETTINGS)
                }}>
                <button className={nav_profile_scss.button}>
                    Аккаунт
                </button>
            </section>
            <section className={props.whoIsClicked === 2 ? nav_profile_scss.active : undefined}
                onClick={() => router.push(MAIN_PATHS.ADDRESSES)}>
                <button className={nav_profile_scss.button}>
                    Адрес доставки
                </button>
            </section>
            <section className={props.whoIsClicked === 3 ? nav_profile_scss.active : undefined}
                onClick={() => router.push(MAIN_PATHS.CARDS)}>
                <button className={nav_profile_scss.button}>
                    Способы оплаты
                </button>
            </section>
        </section>
    )
}