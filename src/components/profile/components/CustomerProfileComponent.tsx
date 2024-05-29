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

    changeCustomerProfileData(customerName: string, birthDate: string, gender: string, description: string,
                              avatarUrl: string, coverUrl: string, avatar: File | string, cover: File | string,
                              router: AppRouterInstance, setMessage:(message: string) => void): void
}

export const CustomerProfileComponent = (props: CustomerProfileInterface) => {
    const router = useRouter()

    useEffect(() => {
        props.getCustomerProfileData(Cookies.get('currentId') as string, router)
    }, [props.customer_data.customerName, props.customer_data.avatarUrl, props.customer_data.coverUrl, props.customer_data.description]);

    useEffect(() => {
        setInput_coverUrl(props.customer_data.coverUrl)
        setInput_avatarUrl(props.customer_data.avatarUrl)
        setInput_name(props.customer_data.customerName)
        setInput_description(props.customer_data.description)
    }, [props.customer_data.customerName, props.customer_data.avatarUrl, props.customer_data.coverUrl, props.customer_data.description]);

    const [input_coverFile, setInput_coverFile] = useState<File | string>('')
    const [input_coverUrl, setInput_coverUrl] = useState(props.customer_data.coverUrl)

    const [input_avatarFile, setInput_avatarFile] = useState<File | string>('')
    const [input_avatarUrl, setInput_avatarUrl] = useState(props.customer_data.avatarUrl)

    const [input_name, setInput_name] = useState(props.customer_data.customerName)

    const [isNeedChangeData, setIsNeedChangeData] = useState(false)
    const [isChangeDataClicked, setIsChangeDataClicked] = useState(false)

    const [isAvatarDeleted, setIsAvatarDeleted] = useState(false)
    const [isCoverDeleted, setIsCoverDeleted] = useState(false)

    const [input_description, setInput_description] = useState(props.customer_data.description)

    const [message, setMessage] = useState('')
    const [isEditMobile, setIsEditMobile] = useState(false)


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

            props.changeCustomerProfileData(input_name, props.customer_data.birthDate.toString(), props.customer_data.gender,
                input_description === '' ? ' ' : input_description,
                avatar === '' ? ' ' : avatar,
                cover === '' ? ' ' : cover,
                input_avatarFile === '' ? ' ' : input_avatarFile,
                input_coverFile === '' ? ' ' : input_coverFile,
                router, setMessage)

            cancelChanging()
        }
    }, [isChangeDataClicked]);

    const changeInputCover = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage('')
        setPhoto(event.target.files as FileList, setInput_coverUrl, setInput_coverFile,
            setMessage, setIsCoverDeleted, props.customer_data.coverUrl)
        setIsNeedChangeData(true)
    }

    const changeInputAvatar = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage('')
        setPhoto(event.target.files as FileList, setInput_avatarUrl, setInput_avatarFile,
            setMessage, setIsAvatarDeleted, props.customer_data.avatarUrl)
        setIsNeedChangeData(true)
    }

    const cancelChanging = () => {
        setMessage('')
        setInput_coverFile('')
        setInput_coverUrl(props.customer_data.coverUrl)
        setInput_avatarFile('')
        setInput_avatarUrl(props.customer_data.avatarUrl)
        setInput_name(props.customer_data.customerName)
        setIsNeedChangeData(false)
        setIsAvatarDeleted(false)
        setIsCoverDeleted(false)
        setIsChangeDataClicked(false)
        setIsEditMobile(false)
    }

    const deleteAvatar = () => {
        setMessage('')
        setIsAvatarDeleted(true)
        setInput_avatarFile('')
        if (input_avatarUrl !== '') {
            setInput_avatarUrl(input_avatarUrl === props.customer_data.avatarUrl ? '' : props.customer_data.avatarUrl)
        }
        setIsNeedChangeData(true)
    }
    const deleteCover = () => {
        setMessage('')
        setIsCoverDeleted(true)
        setInput_coverFile('')
        if (input_coverUrl !== '') {
            setInput_coverUrl(input_coverUrl === props.customer_data.coverUrl ? '' : props.customer_data.coverUrl)
        }
        setIsNeedChangeData(true)
    }


    return (
        <section>
            <HeaderProfileComponent input_coverUrl={input_coverUrl} input_avatarUrl={input_avatarUrl}
                                    input_name={input_name}
                                    isNeedChangeData={isNeedChangeData} cancelChanging={cancelChanging}
                                    setInput_name={setInput_name} setIsChangeDataClicked={setIsChangeDataClicked}
                                    changeInputCover={changeInputCover} changeInputAvatar={changeInputAvatar}
                                    deleteAvatar={deleteAvatar} deleteCover={deleteCover}
                                    message={message}
                                    setIsNeedChangeData={setIsNeedChangeData}
                                    isEditMobile={isEditMobile}
                                    setIsEditMobile={setIsEditMobile}
                                    isPrivateSubscribe={false}
                                    isPublicSubscribe={false} countSubscribers={'0'}/>
            <CustomerCategoriesProfile input_description={input_description}
                                       setInput_description={setInput_description}
                                       setIsNeedChangeData={setIsNeedChangeData}
                                       isEditMobile={isEditMobile}
                                       setIsEditMobile={setIsEditMobile}/>
        </section>
    )
}