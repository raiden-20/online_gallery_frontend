
import settings_scss from '@/scss/components/settings/Settings.module.scss'
import React, {useState} from "react";
import {NavigationSettingsComponent} from "@/components/settings/nav/NavigationSettingsComponent";
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
                    whoIsClicked === 2 ? <DeliveryAddressSettingsComponent setWhoIsClickedMobile={setWhoIsClickedMobile}/> :
                        whoIsClicked === 3 ? <PaySettingsComponent setWhoIsClickedMobile={setWhoIsClickedMobile}/> : null}
            </section>
            <section className={settings_scss.root_mobile}>
                {whoIsClickedMobile === 0 ?
                    <NavigationSettingsComponentMobile setWhoIsClicked={setWhoIsClickedMobile}/>
                :
                    whoIsClickedMobile === 1 ? <AccountSettingsContainer setWhoIsClickedMobile={setWhoIsClickedMobile}/> :
                        whoIsClickedMobile === 2 ? <DeliveryAddressSettingsComponent setWhoIsClickedMobile={setWhoIsClickedMobile}/> :
                            whoIsClickedMobile === 3 ? <PaySettingsComponent setWhoIsClickedMobile={setWhoIsClickedMobile}/> : null
                }
            </section>
        </section>

    )
}