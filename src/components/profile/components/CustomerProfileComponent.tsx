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
    my_customer_data: Customer

    getCustomerProfileData(id: string, router: AppRouterInstance): void

    changeCustomerProfileData(customerName: string, birthDate: string, gender: string, description: string,
                              avatarUrl: string, coverUrl: string, avatar: File | string, cover: File | string,
                              router: AppRouterInstance, setMessage:(message: string) => void): void
}

export const CustomerProfileComponent = (props: CustomerProfileInterface) => {
    const router = useRouter()

    const [customer, setCustomer] = useState<Customer>()

    const [currentId] = useState(Cookies.get('currentId') as string)
    const [customerId] = useState(Cookies.get('customerId') as string)

    useEffect(() => {
        props.getCustomerProfileData(Cookies.get('currentId') as string, router)
    }, []);

    useEffect(() => {
        if (customerId === currentId) {
            setCustomer(props.my_customer_data)
        } else {
            setCustomer(props.customer_data)
        }
    }, [props.my_customer_data, props.customer_data]);

    useEffect(() => {
        setInput_coverUrl(customer?.coverUrl as string)
        setInput_avatarUrl(customer?.avatarUrl as string)
        setInput_name(customer?.customerName as string)
        setInput_description(customer?.description as string)
    }, [customer?.customerName, customer?.avatarUrl, customer?.coverUrl, customer?.description]);

    const [input_coverFile, setInput_coverFile] = useState<File | string>('')
    const [input_coverUrl, setInput_coverUrl] = useState(customer?.coverUrl as string)

    const [input_avatarFile, setInput_avatarFile] = useState<File | string>('')
    const [input_avatarUrl, setInput_avatarUrl] = useState(customer?.avatarUrl as string)

    const [input_name, setInput_name] = useState(customer?.customerName as string)

    const [isNeedChangeData, setIsNeedChangeData] = useState(false)
    const [isChangeDataClicked, setIsChangeDataClicked] = useState(false)

    const [isAvatarDeleted, setIsAvatarDeleted] = useState(false)
    const [isCoverDeleted, setIsCoverDeleted] = useState(false)

    const [input_description, setInput_description] = useState(customer?.description as string)

    const [message, setMessage] = useState('')
    const [isEditMobile, setIsEditMobile] = useState(false)


    useEffect(() => {
        if (isChangeDataClicked) {
            setMessage('')
            let avatar = customer?.avatarUrl as string
            let cover = customer?.coverUrl as string
            if (isAvatarDeleted) {
                avatar = 'delete'
            }
            if (isCoverDeleted) {
                cover = 'delete'
            }

            props.changeCustomerProfileData(input_name, customer?.birthDate.toISOString() as string, customer?.gender as string,
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
            setMessage, setIsCoverDeleted, customer?.coverUrl as string)
        setIsNeedChangeData(true)
    }

    const changeInputAvatar = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage('')
        setPhoto(event.target.files as FileList, setInput_avatarUrl, setInput_avatarFile,
            setMessage, setIsAvatarDeleted, customer?.avatarUrl as string)
        setIsNeedChangeData(true)
    }

    const cancelChanging = () => {
        setMessage('')
        setInput_coverFile('')
        setInput_coverUrl(customer?.coverUrl as string)
        setInput_avatarFile('')
        setInput_avatarUrl(customer?.avatarUrl as string)
        setInput_name(customer?.customerName as string)
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
            setInput_avatarUrl(input_avatarUrl === customer?.avatarUrl ? '' : customer?.avatarUrl as string)
        }
        setIsNeedChangeData(true)
    }
    const deleteCover = () => {
        setMessage('')
        setIsCoverDeleted(true)
        setInput_coverFile('')
        if (input_coverUrl !== '') {
            setInput_coverUrl(input_coverUrl === customer?.coverUrl ? '' : customer?.coverUrl as string)
        }
        setIsNeedChangeData(true)
    }

    if ((customer?.avatarUrl === props.customer_data.avatarUrl || customer?.avatarUrl === props.my_customer_data.avatarUrl)) {
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
    } else {
        return <></>
    }

}