import settings_scss from "@/scss/components/settings/Settings.module.scss";
import Image from "next/image";
import more_icon from "@/assets/icons/settings/more.svg";
import {useRouter} from "next/navigation";
import {MAIN_PATHS} from "@/paths/main";

export const NavigationSettingsComponentMobile = (props: { setWhoIsClicked(whoIsClicked: number): void }) => {
    const router = useRouter()
    return (
        <section>
            <header className={settings_scss.section_name}>
                Настройки
            </header>
            <section className={settings_scss.root_mobile}>
                <section className={settings_scss.auth_data} onClick={() => props.setWhoIsClicked(1)}>
                    <header>Аккаунт</header>
                    <button>
                        <Image src={more_icon} alt={'more_icon'} className={settings_scss.icon}
                               width={0} height={0}/>
                    </button>
                </section>
                <section className={settings_scss.auth_data} onClick={() => router.push(MAIN_PATHS.ADDRESSES)}>
                    <header>Адрес доставки</header>
                    <button>
                        <Image src={more_icon} alt={'more_icon'} className={settings_scss.icon}
                               width={0} height={0}/>
                    </button>
                </section>
                <section className={settings_scss.auth_data} onClick={() => router.push(MAIN_PATHS.CARDS)}>
                    <header>Способы оплаты</header>
                    <button>
                        <Image src={more_icon} alt={'more_icon'} className={settings_scss.icon}
                               width={0} height={0}/>
                    </button>
                </section>
            </section>
        </section>

    )
}