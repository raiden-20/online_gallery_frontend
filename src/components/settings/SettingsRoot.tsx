import settings_scss from '@/scss/components/settings/Settings.module.scss'
import React, {useEffect, useState} from "react";
import {NavigationSettingsComponent} from "@/components/settings/nav/NavigationSettingsComponent";
import {AccountSettingsContainer} from "@/components/settings/categories/account/AccountSettingsContainer";
import {NavigationSettingsComponentMobile} from "@/components/settings/nav/NavigationSettingsComponentMobile";
import {DeliveryAddressesContainer} from "@/components/settings/categories/deliveryAddress/DeliveryAddressContainer";
import {PaySettingsContainer} from "@/components/settings/categories/pay/PaySettingsContainer";
import {usePathname} from "next/navigation";
import {MAIN_PATHS} from "@/paths/main";

export const SettingsRoot = () => {

    const pathname = usePathname()

    const [whoIsClicked, setWhoIsClicked] = useState(1)
    const [whoIsClickedMobile, setWhoIsClickedMobile] = useState(0)

    useEffect(() => {
        switch (pathname) {
            case MAIN_PATHS.SETTINGS: {
                setWhoIsClickedMobile(0)
                setWhoIsClicked(1)
                break
            }

            case MAIN_PATHS.ADDRESSES: {
                setWhoIsClickedMobile(2)
                setWhoIsClicked(2)
                break
            }

            case MAIN_PATHS.CARDS: {
                setWhoIsClickedMobile(3)
                setWhoIsClicked(3)
                break
            }
        }
    }, []);

    return (
        <section>
            <section className={settings_scss.root}>
                <NavigationSettingsComponent whoIsClicked={whoIsClicked}/>
                {pathname === MAIN_PATHS.SETTINGS ? <AccountSettingsContainer setWhoIsClickedMobile={setWhoIsClickedMobile}/> :
                pathname === MAIN_PATHS.ADDRESSES ? <DeliveryAddressesContainer setWhoIsClickedMobile={setWhoIsClickedMobile}/> :
                pathname === MAIN_PATHS.CARDS ? <PaySettingsContainer setWhoIsClickedMobile={setWhoIsClickedMobile}/> : null}
            </section>
            <section className={settings_scss.root_mobile}>
                {whoIsClickedMobile === 0 ?
                    <NavigationSettingsComponentMobile setWhoIsClicked={setWhoIsClickedMobile}/>
                :
                    whoIsClickedMobile === 1 ? <AccountSettingsContainer setWhoIsClickedMobile={setWhoIsClickedMobile}/> :
                    pathname === MAIN_PATHS.ADDRESSES ? <DeliveryAddressesContainer setWhoIsClickedMobile={setWhoIsClickedMobile}/> :
                    pathname === MAIN_PATHS.CARDS ? <PaySettingsContainer setWhoIsClickedMobile={setWhoIsClickedMobile}/> : null
                }
            </section>
        </section>

    )
}