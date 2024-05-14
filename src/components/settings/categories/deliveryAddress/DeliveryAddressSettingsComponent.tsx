import settings_scss from "@/scss/components/settings/Settings.module.scss";
import React, {useEffect} from "react";
import Image from "next/image";
import cancel_icon from "@/assets/icons/settings/cancel.svg";
import {useRouter} from "next/navigation";
import {OneAddressInterface} from "@/interfaces/credentials";
import {AddAddressContainer} from "@/components/settings/categories/deliveryAddress/addAddress/AddAddressContainer";
import {OneAddressContainer} from "@/components/settings/categories/deliveryAddress/oneAddress/OneAddressContainer";
import {MAIN_PATHS} from "@/paths/main";

interface deliverySettingsInterface {
    addresses: OneAddressInterface[]

    setWhoIsClickedMobile(num: number): void

    getAddresses(): void
}

export const DeliveryAddressSettingsComponent = (props: deliverySettingsInterface) => {
    const router = useRouter()

    useEffect(() => {
        props.getAddresses()
    }, []);

    return (
        <section>
            <button className={settings_scss.back}
                    onClick={() => router.push(MAIN_PATHS.SETTINGS)}>
                <Image src={cancel_icon} alt={'cancel_icon'} width={19} height={10}/>
                <div>Назад</div>
            </button>
            <ul className={settings_scss.address_root}>
                {props.addresses.map((oneAddress: OneAddressInterface, index) => {
                    return (
                        <li className={settings_scss.grey_bgc} key={index}>
                            <OneAddressContainer oneAddress={oneAddress}/>
                        </li>
                    )
                })}
                <li className={settings_scss.grey_bgc} key={0}>
                    <AddAddressContainer/>
                </li>
            </ul>
        </section>


    )
}