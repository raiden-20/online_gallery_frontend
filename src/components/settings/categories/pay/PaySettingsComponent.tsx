import settings_scss from "@/scss/components/settings/Settings.module.scss";
import Image from "next/image";
import React, {useEffect} from "react";
import cancel_icon from "@/assets/icons/settings/cancel.svg";
import {OneCardInterface} from "@/interfaces/credentials";
import {useRouter} from "next/navigation";
import {AddCardContainer} from "@/components/settings/categories/pay/addCard/AddCardContainer";
import {OneCardContainer} from "@/components/settings/categories/pay/oneCard/OneCardContainer";
import {MAIN_PATHS} from "@/paths/main";

interface paySettingsInterface {
    setWhoIsClickedMobile(num: number): void

    cards: OneCardInterface[]

    getCards(): void
}

export const PaySettingsComponent = (props: paySettingsInterface) => {
    const router = useRouter()

    useEffect(() => {
        props.getCards()
    }, []);

    return (
        <section>
            <button className={settings_scss.back}
                    onClick={() => router.push(MAIN_PATHS.SETTINGS)}>
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
                <li className={settings_scss.grey_bgc} key={0}>
                    <AddCardContainer/>
                </li>
            </ul>
        </section>


    )
}