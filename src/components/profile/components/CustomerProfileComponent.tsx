import {HeaderProfileComponent} from "@/components/profile/header/HeaderProfileComponent";
import React, {useEffect, useState} from "react";
import {Customer} from "@/interfaces/customerInterface";
import {setPhoto} from "@/components/profile/components/setPhoto";
import {CustomerCategoriesProfile} from "@/components/profile/profile_elemets/categories/CustomerCategoriesProfile";
import Cookies from "js-cookie";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {useRouter} from "next/navigation";

interface CustomerProfileInterface {
    customer_data: Customer

    getCustomerProfileData(id: string, router: AppRouterInstance): void

    changeCustomerProfileData(customerName: string, birthDate: string, gender: string,
                              avatarUrl: string, coverUrl: string, avatar: File | string, cover: File | string,
                              router: AppRouterInstance, setMessage:(message: string) => void): void
}

export const CustomerProfileComponent = (props: CustomerProfileInterface) => {
    const router = useRouter()

    useEffect(() => {
        props.getCustomerProfileData(Cookies.get('currentId') as string, router)
    }, []);

    useEffect(() => {
        if (Cookies.get('currentId') === Cookies.get('customerId') && Cookies.get('artistId') === null) {
            Cookies.set('artistId', props.customer_data.artistId)
        }
    }, [props.customer_data]);

    const [input_coverFile, setInput_coverFile] = useState<File | string>('')
    const [input_coverUrl, setInput_coverUrl] = useState(props.customer_data.coverUrl)

    const [input_avatarFile, setInput_avatarFile] = useState<File | string>('')
    const [input_avatarUrl, setInput_avatarUrl] = useState(props.customer_data.avatarUrl)

    const [input_name, setInput_name] = useState(props.customer_data.customerName)

    const [isNeedChangeData, setIsNeedChangeData] = useState(false)
    const [isChangeDataClicked, setIsChangeDataClicked] = useState(false)

    const [isAvatarDeleted, setIsAvatarDeleted] = useState(false)
    const [isCoverDeleted, setIsCoverDeleted] = useState(false)

    const [message, setMessage] = useState('sdfghfds')


    useEffect(() => {
        if (isChangeDataClicked) {
            setMessage('')
            let avatar = props.customer_data.avatarUrl
            let cover = props.customer_data.coverUrl
            if (isAvatarDeleted) {
                avatar = 'delete'
            }
            if (isCoverDeleted) {
                cover = 'delete'
            }

            props.changeCustomerProfileData(input_name, props.customer_data.birthDate, props.customer_data.gender,
                avatar, cover, input_avatarFile, input_coverFile,
                router, setMessage)

            cancelChanging()
        }
    }, [isChangeDataClicked]);

    useEffect(() => {
        if (input_coverFile === undefined && input_avatarFile === undefined && input_name === props.customer_data.customerName) {
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
        setInput_coverFile('')
        setInput_coverUrl(props.customer_data.coverUrl)
        setInput_avatarFile('')
        setInput_avatarUrl(props.customer_data.avatarUrl)
        setInput_name(props.customer_data.customerName)
        setIsNeedChangeData(false)
        setIsAvatarDeleted(false)
        setIsCoverDeleted(false)
        setIsChangeDataClicked(false)
    }

    const deleteAvatar = () => {
        setIsAvatarDeleted(true)
        setInput_avatarFile('')
        setInput_avatarUrl('')
    }
    const deleteCover = () => {
        setIsCoverDeleted(true)
        setInput_coverFile('')
        setInput_coverUrl('')
    }


    return (
        <section>
            <HeaderProfileComponent input_coverUrl={input_coverUrl} input_avatarUrl={input_avatarUrl}
                                    input_name={input_name}
                                    isNeedChangeData={isNeedChangeData} cancelChanging={cancelChanging}
                                    setInput_name={setInput_name} setIsChangeDataClicked={setIsChangeDataClicked}
                                    changeInputCover={changeInputCover} changeInputAvatar={changeInputAvatar}
                                    deleteAvatar={deleteAvatar} deleteCover={deleteCover}
                                    message={message}/>
            <CustomerCategoriesProfile/>
        </section>
    )
}