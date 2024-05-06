import React, {useState} from "react";

import {CoverSectionHeaderProfile} from "@/components/profile/header/elements/CoverSectionHeaderProfile";
import {AvatarSectionHeaderProfile} from "@/components/profile/header/elements/AvatarSectionHeaderProfile";
import {NameHeaderProfile} from "@/components/profile/header/elements/NameHeaderProfile";
import {SaveDataHeaderProfile} from "@/components/profile/header/elements/SaveDataHeaderProfile";

import header_profile_scss from '@/scss/components/profile/HeaderProfile.module.scss'
import {ActionProfileContainer} from "@/components/profile/header/elements/actions/ActionProfileContainer";

interface HeaderProfileInterface {
    countSubscribers: string
    input_coverUrl: string,
    input_avatarUrl: string,
    input_name: string,
    isNeedChangeData: boolean
    message: string

    isPublicSubscribe: boolean
    isPrivateSubscribe: boolean

    setInput_name(input_name: string): void
    changeInputCover(event: React.ChangeEvent<HTMLInputElement>): void
    changeInputAvatar(event: React.ChangeEvent<HTMLInputElement>): void
    setIsChangeDataClicked(isChangeDataClicked: boolean): void
    setIsNeedChangeData(flag: boolean): void
    cancelChanging(): void
    deleteAvatar(): void
    deleteCover(): void

    isEditMobile : boolean
    setIsEditMobile(flag: boolean): void
}

export const HeaderProfileComponent = (props: HeaderProfileInterface) => {

    const [isNameClicked, setIsNameClicked] = useState(false)

    return (
        <section className={header_profile_scss.page}>
            <section className={header_profile_scss.root}>
                <CoverSectionHeaderProfile input_coverUrl={props.input_coverUrl}
                                           message={props.message}
                                           changeInputCover={props.changeInputCover}
                                           deleteCover={props.deleteCover}
                                           isEditMobile={props.isEditMobile}/>
                <section className={header_profile_scss.profile_data}>
                    <AvatarSectionHeaderProfile input_avatarUrl={props.input_avatarUrl}
                                                message={props.message}
                                                changeInputAvatar={props.changeInputAvatar}
                                                deleteAvatar={props.deleteAvatar}
                                                isEditMobile={props.isEditMobile}/>
                    <NameHeaderProfile input_name={props.input_name}
                                       setInput_name={props.setInput_name}
                                       setIsNeedChangeData={props.setIsNeedChangeData}
                                       isNameClicked={isNameClicked}
                                       setIsNameClicked={setIsNameClicked}
                                       isEditMobile={props.isEditMobile}/>
                    <ActionProfileContainer isEditMobile={props.isEditMobile}
                                                setIsEditMobile={props.setIsEditMobile}
                                                isPrivateSubscribe={props.isPrivateSubscribe}
                                                isPublicSubscribe={props.isPublicSubscribe}
                                            countSubscribers={props.countSubscribers}/>
                </section>
            </section>
            {props.isNeedChangeData ?
                <SaveDataHeaderProfile cancelChanging={props.cancelChanging}
                                       setIsNameClicked={setIsNameClicked}
                                       setIsChangeDataClicked={props.setIsChangeDataClicked}/>
                : null}
        </section>
    )
}