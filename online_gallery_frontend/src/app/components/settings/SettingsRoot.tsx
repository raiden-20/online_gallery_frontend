import {AccountSettingsComponent} from "@/app/components/settings/categories/account/AccountSettingsComponent";
import {
    DeliveryAddressSettingsComponent
} from "@/app/components/settings/categories/deliveryAddress/DeliveryAddressSettingsComponent";
import {PaySettingsComponent} from "@/app/components/settings/categories/pay/PaySettingsComponent";
import {NavigationSettingsComponent} from "@/app/components/settings/nav/NavigationSettingsComponent";
import {useState} from "react";

import settings_scss from '@/app/scss/components/settings/Settings.module.scss'

export const SettingsRoot = () => {

    const [whoIsClicked, setWhoIsClicked] = useState(1)

    return (
        <section className={settings_scss.root}>
            <NavigationSettingsComponent setWhoIsClicked={setWhoIsClicked}
                                         whoIsClicked={whoIsClicked}/>
            {whoIsClicked === 1 ? <AccountSettingsComponent/> :
                whoIsClicked === 2 ? <DeliveryAddressSettingsComponent/> :
                    whoIsClicked === 3 ? <PaySettingsComponent/> : null}
        </section>
    )
}