import header_profile_scss from '@/scss/components/profile/HeaderProfile.module.scss'
import Image from "next/image";
import important from '@/assets/icons/profile/important.svg'

import React, {useState} from "react";
import {CoverSectionHeaderProfile} from "@/components/profile/header/elements/CoverSectionHeaderProfile";
import {AvatarSectionHeaderProfile} from "@/components/profile/header/elements/AvatarSectionHeaderProfile";
import {ActionButtonsHeaderProfile} from "@/components/profile/header/elements/ActionButtonsHeaderProfile";
import {NameHeaderProfile} from "@/components/profile/header/elements/NameHeaderProfile";

interface HeaderProfileInterface {
    input_coverUrl: string,
    input_avatarUrl: string,
    input_name: string,
    isNeedChangeData: boolean
    message: string

    setInput_name(input_name: string): void
    changeInputCover(event: React.ChangeEvent<HTMLInputElement>): void
    changeInputAvatar(event: React.ChangeEvent<HTMLInputElement>): void
    setIsChangeDataClicked(isChangeDataClicked: boolean): void
    setIsNeedChangeData(flag: boolean): void
    cancelChanging(): void
    deleteAvatar(): void
    deleteCover(): void
}

export const HeaderProfileComponent = (props: HeaderProfileInterface) => {

    const [isNameClicked, setIsNameClicked] = useState(false)

    return (
        <section className={header_profile_scss.page}>
            <section className={header_profile_scss.root}>
                <CoverSectionHeaderProfile input_coverUrl={props.input_coverUrl}
                                           message={props.message}
                                           changeInputCover={props.changeInputCover}
                                           deleteCover={props.deleteCover}/>
                <section className={header_profile_scss.profile_data}>
                    <AvatarSectionHeaderProfile input_avatarUrl={props.input_avatarUrl}
                                                message={props.message}
                                                changeInputAvatar={props.changeInputAvatar}
                                                deleteAvatar={props.deleteAvatar}/>
                    <NameHeaderProfile input_name={props.input_name}
                                       setInput_name={props.setInput_name}
                                       setIsNeedChangeData={props.setIsNeedChangeData}
                                       isNameClicked={isNameClicked}
                                       setIsNameClicked={setIsNameClicked}/>
                    <ActionButtonsHeaderProfile/>
                </section>
            </section>
            {props.isNeedChangeData ?
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
                            setIsNameClicked(false)
                            props.setIsChangeDataClicked(true)
                        }
                        }>
                            Сохранить
                        </button>
                    </footer>
                </section>
                : null}
        </section>
    )
}