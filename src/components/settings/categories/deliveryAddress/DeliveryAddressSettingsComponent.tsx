import settings_scss from "@/scss/components/settings/Settings.module.scss";
import {useEffect} from "react";
import Image from "next/image";
import cancel_icon from "@/assets/icons/settings/cancel.svg";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {useRouter} from "next/navigation";
import {OneAddressInterface} from "@/interfaces/credentials";
import {AddAddressContainer} from "@/components/settings/categories/deliveryAddress/addAddress/AddAddressContainer";
import {OneAddressContainer} from "@/components/settings/categories/deliveryAddress/oneAddress/OneAddressContainer";
import {Cancel_ButtonComponent} from "@/components/cancel_button/Cancel_ButtonComponent";

interface deliverySettingsInterface {
    addresses: OneAddressInterface[]

    setWhoIsClickedMobile(num: number): void

    getAddresses(router: AppRouterInstance): void
}

export const DeliveryAddressSettingsComponent = (props: deliverySettingsInterface) => {
    const router = useRouter()

    useEffect(() => {
        props.getAddresses(router)
    }, []);

    return (
        <section>
            <Cancel_ButtonComponent setCancel={props.setWhoIsClickedMobile}
                                    whatSet={0}/>
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