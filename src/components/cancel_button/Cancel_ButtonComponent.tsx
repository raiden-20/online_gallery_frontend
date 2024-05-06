import settings_scss from "@/scss/components/settings/Settings.module.scss";
import Image from "next/image";
import cancel_icon from "@/assets/icons/settings/cancel.svg";
import React from "react";

interface Cancel_buttonInterface {
    setCancel(flag: boolean | number): void
    whatSet: boolean | number
}

export const Cancel_ButtonComponent = (props: Cancel_buttonInterface) => {

    return (
        <button className={settings_scss.back}
                onClick={() => props.setCancel(props.whatSet)}>
            <Image src={cancel_icon} alt={'cancel_icon'} width={19} height={10}/>
            <div>Назад</div>
        </button>
    )
}