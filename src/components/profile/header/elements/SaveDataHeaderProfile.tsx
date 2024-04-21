import header_profile_scss from "@/scss/components/profile/HeaderProfile.module.scss";
import Image from "next/image";
import important from "@/assets/icons/profile/important.svg";
import React from "react";

interface saveDataHeaderProfileInterface {
    cancelChanging(): void
    setIsNameClicked(isNameClicked: boolean): void
    setIsChangeDataClicked(isChangeDataClicked: boolean): void
}

export const SaveDataHeaderProfile = (props: saveDataHeaderProfileInterface) => {

    return (
        <section className={header_profile_scss.change_data_window}>
            <section className={header_profile_scss.change_data_window_data}>
                <Image src={important} alt={'important'} width={0} height={0}/>
                <section>Сохранить изменения?</section>
            </section>
            <footer className={header_profile_scss.change_data_window_buttons}>
                <button className={'cancel_button'} onClick={() => props.cancelChanging()}>
                    Отменить
                </button>
                <button className={'main_button'} onClick={() => {
                    props.setIsNameClicked(false)
                    props.setIsChangeDataClicked(true)
                }
                }>
                    Сохранить
                </button>
            </footer>
        </section>
    )
}