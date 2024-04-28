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
            <ul className={settings_scss.root_mobile}>
                <li className={settings_scss.auth_data} onClick={() => props.setWhoIsClicked(1)}>
                    <header>Аккаунт</header>
                    <button>
                        <Image src={more_icon} alt={'more_icon'} className={settings_scss.icon}
                               width={0} height={0}/>
                    </button>
                </li>
                <li className={settings_scss.auth_data} onClick={() => props.setWhoIsClicked(2)}>
                    <header>Адрес доставки</header>
                    <button>
                        <Image src={more_icon} alt={'more_icon'}  className={settings_scss.icon}
                               width={0} height={0}/>
                    </button>
                </li>
                <li className={settings_scss.auth_data} onClick={() => props.setWhoIsClicked(3)}>
                    <header>Способы оплаты</header>
                    <button>
                        <Image src={more_icon} alt={'more_icon'} className={settings_scss.icon}
                               width={0} height={0}/>
                    </button>
                </li>
            </ul>
        </section>

    )
}