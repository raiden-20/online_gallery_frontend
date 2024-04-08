
import settings_scss from '@/scss/components/settings/Settings.module.scss'
import React, {useState} from "react";
import {NavigationSettingsComponent} from "@/components/settings/nav/NavigationSettingsComponent";
import {AccountSettingsComponent} from "@/components/settings/categories/account/AccountSettingsComponent";
import {
    DeliveryAddressSettingsComponent
} from "@/components/settings/categories/deliveryAddress/DeliveryAddressSettingsComponent";
import {PaySettingsComponent} from "@/components/settings/categories/pay/PaySettingsComponent";
import {AccountSettingsContainer} from "@/components/settings/categories/account/AccountSettingsContainer";
import {NavigationSettingsComponentMobile} from "@/components/settings/nav/NavigationSettingsComponentMobile";

export const SettingsRoot = () => {

    const [whoIsClicked, setWhoIsClicked] = useState(1)
    const [whoIsClickedMobile, setWhoIsClickedMobile] = useState(0)

    return (
        <section>
            <section className={settings_scss.root}>
                <NavigationSettingsComponent setWhoIsClicked={setWhoIsClicked}
                                             whoIsClicked={whoIsClicked}/>
                {whoIsClicked === 1 ? <AccountSettingsContainer setWhoIsClickedMobile={setWhoIsClickedMobile}/> :
                    whoIsClicked === 2 ? <DeliveryAddressSettingsComponent/> :
                        whoIsClicked === 3 ? <PaySettingsComponent/> : null}
            </section>
            <section className={settings_scss.root_mobile}>
                {whoIsClickedMobile === 0 ?
                    <NavigationSettingsComponentMobile setWhoIsClicked={setWhoIsClickedMobile}/>
                :
                    whoIsClicked === 1 ? <AccountSettingsContainer setWhoIsClickedMobile={setWhoIsClickedMobile}/> :
                        whoIsClicked === 2 ? <DeliveryAddressSettingsComponent/> :
                            whoIsClicked === 3 ? <PaySettingsComponent/> : null
                }
            </section>
        </section>

    )
}