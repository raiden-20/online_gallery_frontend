
import settings_scss from '@/scss/components/settings/Settings.module.scss'
import React, {useState} from "react";
import {NavigationSettingsComponent} from "@/components/settings/nav/NavigationSettingsComponent";
import {AccountSettingsComponent} from "@/components/settings/categories/account/AccountSettingsComponent";
import {
    DeliveryAddressSettingsComponent
} from "@/components/settings/categories/deliveryAddress/DeliveryAddressSettingsComponent";
import {PaySettingsComponent} from "@/components/settings/categories/pay/PaySettingsComponent";
import {AccountSettingsContainer} from "@/components/settings/categories/account/AccountSettingsContainer";

export const SettingsRoot = () => {

    const [whoIsClicked, setWhoIsClicked] = useState(1)

    return (
        <section className={settings_scss.root}>
            <NavigationSettingsComponent setWhoIsClicked={setWhoIsClicked}
                                         whoIsClicked={whoIsClicked}/>
            {whoIsClicked === 1 ? <AccountSettingsContainer/> :
                whoIsClicked === 2 ? <DeliveryAddressSettingsComponent/> :
                    whoIsClicked === 3 ? <PaySettingsComponent/> : null}
        </section>
    )
}