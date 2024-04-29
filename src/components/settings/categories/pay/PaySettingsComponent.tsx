import settings_scss from "@/scss/components/settings/Settings.module.scss";
import Image from "next/image";
import {useEffect} from "react";
import cancel_icon from "@/assets/icons/settings/cancel.svg";
import {OneCardInterface} from "@/interfaces/credentials";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {useRouter} from "next/navigation";
import {AddCardContainer} from "@/components/settings/categories/pay/addCard/AddCardContainer";
import {OneCardContainer} from "@/components/settings/categories/pay/oneCard/OneCardContainer";

interface paySettingsInterface {
    setWhoIsClickedMobile(num: number): void
    cards: OneCardInterface[]
    getCards(router: AppRouterInstance): void
}

export const PaySettingsComponent = (props: paySettingsInterface) => {
    const router = useRouter()

    useEffect(() => {
        props.getCards(router)
    }, []);

    return (
        <section>
            <button className={settings_scss.back}
                    onClick={() => props.setWhoIsClickedMobile(0)}>
                <Image src={cancel_icon} alt={'cancel_icon'} width={19} height={10}/>
                <div>Назад</div>
            </button>
            <ul className={settings_scss.address_root}>
                {props.cards.map((oneCard: OneCardInterface, index) => {
                    return (
                        <li className={settings_scss.grey_bgc} key={index}>
                            <OneCardContainer oneCard={oneCard}/>
                        </li>
                    )
                })}
                <li className={settings_scss.grey_bgc}>
                <AddCardContainer/>
                </li>
            </ul>
        </section>


    )
}