import {HeaderProfileComponent} from "@/components/profile/header/HeaderProfileComponent";
import {ArtistCategoriesProfile} from "@/components/profile/profile_elemets/categories/ArtistCategoriesProfile";
import {Artist} from "@/interfaces/artistInterface";
import React, {useEffect, useState} from "react";
import {setPhoto} from "@/components/profile/components/setPhoto";
import Cookies from "js-cookie";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {useRouter} from "next/navigation";
interface ArtistProfileInterface {
    artist_data: Artist

    getArtistProfileData(id: string, router: AppRouterInstance): void
    changeArtistProfileData(artistName: string, avatarUrl: string, coverUrl: string,
                            avatar: File | string, cover: File | string, description: string,
                            router: AppRouterInstance, setMessage:(message: string) => void): void
}

export const ArtistProfileComponent = (props: ArtistProfileInterface) => {
    const router = useRouter()

    const [currentId] = useState(Cookies.get('currentId') as string)

    useEffect(() => {
        props.getArtistProfileData(currentId, router)
    }, []);

    const [input_coverFile, setInput_coverFile] = useState<File | string>('')
    const [input_coverUrl, setInput_coverUrl] = useState(props.artist_data.coverUrl)

    const [input_avatarFile, setInput_avatarFile] = useState<File | string>('')
    const [input_avatarUrl, setInput_avatarUrl] = useState(props.artist_data.avatarUrl)

    const [input_name, setInput_name] = useState(props.artist_data.artistName)

    const [input_description, setInput_description] = useState(props.artist_data.description)

    const [isNeedChangeData, setIsNeedChangeData] = useState(false)
    const [isChangeDataClicked, setIsChangeDataClicked] = useState(false)

    const [isAvatarDeleted, setIsAvatarDeleted] = useState(false)
    const [isCoverDeleted, setIsCoverDeleted] = useState(false)

    const [message, setMessage] = useState('')
    const [isEditMobile, setIsEditMobile] = useState(false)

    useEffect(() => {
        setInput_coverUrl(props.artist_data.coverUrl)
        setInput_avatarUrl(props.artist_data.avatarUrl)
        setInput_name(props.artist_data.artistName)
        setInput_description(props.artist_data.description)
    }, [props.artist_data.artistName, props.artist_data.avatarUrl, props.artist_data.coverUrl, props.artist_data.description]);


    useEffect(() => {
        if (isChangeDataClicked) {
            setMessage('')
            let avatar = props.artist_data.avatarUrl
            let cover = props.artist_data.coverUrl
            if (isAvatarDeleted) {
                avatar = 'delete'
            }
            if (isCoverDeleted) {
                cover = 'delete'
            }

            props.changeArtistProfileData(input_name,
                avatar === '' ? ' ' : avatar,
                cover === '' ? ' ' : cover,
                input_avatarFile === '' ? ' ' : input_avatarFile,
                input_coverFile === '' ? ' ' : input_coverFile,
                input_description === '' ? ' ' : input_description, router, setMessage)

            setIsChangeDataClicked(false)
            setIsNeedChangeData(false)
        }
    }, [isChangeDataClicked]);

    const changeInputCover = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage('')
        setPhoto(event.target.files as FileList, setInput_coverUrl, setInput_coverFile,
            setMessage, setIsCoverDeleted, props.artist_data.coverUrl)
        setIsNeedChangeData(true)
    }

    const changeInputAvatar = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage('')
        setPhoto(event.target.files as FileList, setInput_avatarUrl, setInput_avatarFile,
            setMessage, setIsAvatarDeleted, props.artist_data.avatarUrl)
        setIsNeedChangeData(true)
    }

    const deleteAvatar = () => {
        setIsAvatarDeleted(true)
        setInput_avatarFile('')
        if (input_avatarUrl !== '') {
            setInput_avatarUrl(input_avatarUrl === props.artist_data.avatarUrl ? '' : props.artist_data.avatarUrl)
        }
        setIsNeedChangeData(true)
    }
    const deleteCover = () => {
        setIsCoverDeleted(true)
        setInput_coverFile('')
        if (input_coverUrl !== '') {
            setInput_coverUrl(input_coverUrl === props.artist_data.coverUrl ? '' : props.artist_data.coverUrl)
        }
        setIsNeedChangeData(true)
    }

    const cancelChanging = () => {
        setInput_coverFile('')
        setInput_coverUrl(props.artist_data.coverUrl)
        setInput_avatarFile('')
        setInput_avatarUrl(props.artist_data.avatarUrl)
        setInput_name(props.artist_data.artistName)
        setInput_description(props.artist_data.description)
        setIsNeedChangeData(false)
        setIsEditMobile(false)
    }

    return (
        <section>
            <HeaderProfileComponent input_coverUrl={input_coverUrl} input_avatarUrl={input_avatarUrl} input_name={input_name}
                                    isNeedChangeData={isNeedChangeData} cancelChanging={cancelChanging}
                                    setInput_name={setInput_name} setIsChangeDataClicked={setIsChangeDataClicked}
                                    changeInputCover={changeInputCover} changeInputAvatar={changeInputAvatar}
                                    deleteAvatar={deleteAvatar} deleteCover={deleteCover}
                                    message={message}
                                    setIsNeedChangeData={setIsNeedChangeData}
                                    isEditMobile={isEditMobile}
                                    setIsEditMobile={setIsEditMobile}
                                    isPrivateSubscribe={props.artist_data.isPrivateSubscribe}
                                    isPublicSubscribe={props.artist_data.isPublicSubscribe} countSubscribers={props.artist_data.countSubscribers}/>
            <ArtistCategoriesProfile input_description={input_description} setInput_description={setInput_description}
                                     setIsNeedChangeData={setIsNeedChangeData}
                                     isEditMobile={isEditMobile}
                                     setIsEditMobile={setIsEditMobile}
                                     countSoldArts={props.artist_data.countSoldArts}
                                     countSubscribers={props.artist_data.countSubscribers}
                                     salesAmount={props.artist_data.salesAmount} isPrivateSubscribe={props.artist_data.isPrivateSubscribe}/>
        </section>
    )
}