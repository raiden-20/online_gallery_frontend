import {HeaderProfileComponent} from "@/components/profile/header/HeaderProfileComponent";
import React, {useEffect, useState} from "react";
import {Customer} from "@/interfaces/customerInterface";
import {setPhoto} from "@/components/profile/components/setPhoto";
import {CustomerCategoriesProfile} from "@/components/profile/profile_elemets/categories/CustomerCategoriesProfile";

interface CustomerProfileInterface {
    customer_data: Customer

    getCustomerProfileData(id: string): void

    changeCustomerProfileData(customer_name: string, date_birth: string, gender: string,
                              avatar_url: string, cover_url: string, avatar_file: File | null, cover_file: File | null): void
}

export const CustomerProfileComponent = (props: CustomerProfileInterface) => {

    const [input_coverFile, setInput_coverFile] = useState<File | null>()
    const [input_coverUrl, setInput_coverUrl] = useState(props.customer_data.cover_url)

    const [input_avatarFile, setInput_avatarFile] = useState<File | null>()
    const [input_avatarUrl, setInput_avatarUrl] = useState(props.customer_data.avatar_url)

    const [input_name, setInput_name] = useState(props.customer_data.customer_name)

    const [isNeedChangeData, setIsNeedChangeData] = useState(false)
    const [isChangeDataClicked, setIsChangeDataClicked] = useState(false)

    const [isAvatarDeleted, setIsAvatarDeleted] = useState(false)
    const [isCoverDeleted, setIsCoverDeleted] = useState(false)


    useEffect(() => {
        if (isChangeDataClicked) {
            let avatar = props.customer_data.avatar_url
            let cover = props.customer_data.cover_url
            if (isAvatarDeleted) {
                avatar = 'delete'
            }
            if (isCoverDeleted) {
                cover = 'delete'
            }

            props.changeCustomerProfileData(input_name, props.customer_data.date_birth, props.customer_data.gender,
                avatar, cover, input_avatarFile as File || null, input_coverFile as File || null)

            cancelChanging()
        }
    }, [isChangeDataClicked]);

    useEffect(() => {
        if (input_coverFile === undefined && input_avatarFile === undefined && input_name === props.customer_data.customer_name) {
            setIsNeedChangeData(false)
        } else {
            setIsNeedChangeData(true)
        }

    }, [input_coverFile, input_name, input_avatarFile]);

    const changeInputCover = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhoto(event.target.files as FileList, setInput_coverUrl, setInput_coverFile)
    }

    const changeInputAvatar = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhoto(event.target.files as FileList, setInput_avatarUrl, setInput_avatarFile)
    }

    const cancelChanging = () => {
        setInput_coverFile(null)
        setInput_coverUrl(props.customer_data.cover_url)
        setInput_avatarFile(null)
        setInput_avatarUrl(props.customer_data.avatar_url)
        setInput_name(props.customer_data.customer_name)
        setIsNeedChangeData(false)
        setIsAvatarDeleted(false)
        setIsCoverDeleted(false)
        setIsChangeDataClicked(false)
    }

    const deleteAvatar = () => {
        setIsAvatarDeleted(true)
        setInput_avatarFile(null)
        setInput_avatarUrl('')
    }
    const deleteCover = () => {
        setIsCoverDeleted(true)
        setInput_coverFile(null)
        setInput_coverUrl('')
    }


    return (
        <section>
            <HeaderProfileComponent input_coverUrl={input_coverUrl} input_avatarUrl={input_avatarUrl}
                                    input_name={input_name}
                                    isNeedChangeData={isNeedChangeData} cancelChanging={cancelChanging}
                                    setInput_name={setInput_name} setIsChangeDataClicked={setIsChangeDataClicked}
                                    changeInputCover={changeInputCover} changeInputAvatar={changeInputAvatar}
                                    deleteAvatar={deleteAvatar} deleteCover={deleteCover}/>
            <CustomerCategoriesProfile/>
        </section>
    )
}