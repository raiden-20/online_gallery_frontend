import nav_profile_scss from "@/scss/components/profile/Navigation.module.scss";
import settings_scss from "@/scss/components/settings/Settings.module.scss";
import Image from "next/image";
import more_icon from "@/assets/icons/settings/more.svg";

export const NavigationSettingsComponentMobile = (props: {setWhoIsClicked(whoIsClicked: number): void}) => {

    return (
        <section>
            <header className={settings_scss.section_name}>
                Настройки
            </header>
            <ul className={nav_profile_scss.root}>
                <li className={settings_scss.auth_data}>
                    <header>Аккаунт</header>
                    <button onClick={() => props.setWhoIsClicked(1)}>
                        <Image src={more_icon} alt={'more_icon'} width={0} height={0}/>
                    </button>
                </li>
                <li className={settings_scss.auth_data}>
                    <header>Адрес доставки</header>
                    <button onClick={() => props.setWhoIsClicked(2)}>
                        <Image src={more_icon} alt={'more_icon'} width={0} height={0}/>
                    </button>
                </li>
                <li className={settings_scss.auth_data}>
                    <header>Способы оплаты</header>
                    <button onClick={() => props.setWhoIsClicked(3)}>
                        <Image src={more_icon} alt={'more_icon'} width={0} height={0}/>
                    </button>
                </li>
            </ul>
        </section>

    )
}