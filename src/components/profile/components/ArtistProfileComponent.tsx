import {HeaderProfileComponent} from "@/components/profile/header/HeaderProfileComponent";
import {ArtistCategoriesProfile} from "@/components/profile/profile_elemets/categories/ArtistCategoriesProfile";
import {Artist} from "@/interfaces/artistInterface";
import React, {useEffect, useState} from "react";
import {setPhoto} from "@/components/profile/components/setPhoto";
import Cookies from "js-cookie";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {usePathname, useRouter} from "next/navigation";
interface ArtistProfileInterface {
    artist_data: Artist
    my_artist_data: Artist

    getArtistProfileData(id: string, router: AppRouterInstance): void
    changeArtistProfileData(artistName: string, avatarUrl: string, coverUrl: string,
                            avatar: File | string, cover: File | string, description: string,
                            router: AppRouterInstance, setMessage:(message: string) => void): void
}

export const ArtistProfileComponent = (props: ArtistProfileInterface) => {
    const router = useRouter()

    const pathname = usePathname().split('/')[usePathname().split('/').length - 1]

    const [artist, setArtist] = useState<Artist>()

    const [currentId] = useState(Cookies.get('currentId') as string)
    const [artistId] = useState(Cookies.get('artistId') as string)

    useEffect(() => {
        Cookies.set('currentId', pathname)
    }, []);

    useEffect(() => {
        if (pathname.length > 0) {
            props.getArtistProfileData(pathname, router)
        }

        return setArtist(undefined)
    }, []);

    useEffect(() => {
        if (pathname === currentId) {
            if (props.my_artist_data.artistName !== '') {
                if (artistId === pathname) {
                    setArtist(props.my_artist_data)
                }
            }
            if (props.artist_data.artistName !== '') {
                if (artistId !== pathname) {
                    setArtist(props.artist_data)
                }
            }
        }

    }, [props.artist_data, props.my_artist_data]);

    const [input_coverFile, setInput_coverFile] = useState<File | string>('')
    const [input_coverUrl, setInput_coverUrl] = useState(artist?.coverUrl as string)

    const [input_avatarFile, setInput_avatarFile] = useState<File | string>('')
    const [input_avatarUrl, setInput_avatarUrl] = useState(artist?.avatarUrl as string)

    const [input_name, setInput_name] = useState(artist?.artistName as string)

    const [input_description, setInput_description] = useState(artist?.description as string)

    const [isNeedChangeData, setIsNeedChangeData] = useState(false)
    const [isChangeDataClicked, setIsChangeDataClicked] = useState(false)

    const [isAvatarDeleted, setIsAvatarDeleted] = useState(false)
    const [isCoverDeleted, setIsCoverDeleted] = useState(false)

    const [message, setMessage] = useState('')
    const [isEditMobile, setIsEditMobile] = useState(false)

    useEffect(() => {
        setInput_coverUrl(artist?.coverUrl as string)
        setInput_avatarUrl(artist?.avatarUrl as string)
        setInput_name(artist?.artistName as string)
        setInput_description(artist?.description as string)
    }, [artist?.artistName, artist?.avatarUrl, artist?.coverUrl, artist?.description]);


    useEffect(() => {
        if (isChangeDataClicked) {
            setMessage('')
            let avatar = artist?.avatarUrl as string
            let cover = artist?.coverUrl as string
            if (isAvatarDeleted) {
                avatar = 'delete'
            }
            if (isCoverDeleted) {
                cover = 'delete'
            }

            props.changeArtistProfileData(input_name as string,
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
            setMessage, setIsCoverDeleted, artist?.coverUrl as string)
        setIsNeedChangeData(true)
    }

    const changeInputAvatar = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage('')
        setPhoto(event.target.files as FileList, setInput_avatarUrl, setInput_avatarFile,
            setMessage, setIsAvatarDeleted, artist?.avatarUrl as string)
        setIsNeedChangeData(true)
    }

    const deleteAvatar = () => {
        setIsAvatarDeleted(true)
        setInput_avatarFile('')
        if (input_avatarUrl !== '') {
            setInput_avatarUrl(input_avatarUrl === artist?.avatarUrl ? '' : artist?.avatarUrl as string)
        }
        setIsNeedChangeData(true)
    }
    const deleteCover = () => {
        setIsCoverDeleted(true)
        setInput_coverFile('')
        if (input_coverUrl !== '') {
            setInput_coverUrl(input_coverUrl === artist?.coverUrl ? '' : artist?.coverUrl as string)
        }
        setIsNeedChangeData(true)
    }

    const cancelChanging = () => {
        setInput_coverFile('')
        setInput_coverUrl(artist?.coverUrl as string)
        setInput_avatarFile('')
        setInput_avatarUrl(artist?.avatarUrl as string)
        setInput_name(artist?.artistName as string)
        setInput_description(artist?.description as string)
        setIsNeedChangeData(false)
        setIsEditMobile(false)
    }

    if (artist?.avatarUrl !== undefined && (artist?.avatarUrl === props.my_artist_data.avatarUrl || artist?.avatarUrl === props.artist_data.avatarUrl)) {
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
                                        isPrivateSubscribe={artist?.isPrivateSubscribe as boolean}
                                        isPublicSubscribe={artist?.isPublicSubscribe as boolean}
                                        countSubscribers={artist?.countSubscribers as string}/>
                <ArtistCategoriesProfile input_description={input_description} setInput_description={setInput_description}
                                         setIsNeedChangeData={setIsNeedChangeData}
                                         isEditMobile={isEditMobile}
                                         setIsEditMobile={setIsEditMobile}
                                         countSoldArts={artist?.countSoldArts as string}
                                         countSubscribers={artist?.countSubscribers as string}
                                         salesAmount={artist?.salesAmount as string}
                                         isPrivateSubscribe={artist?.isPrivateSubscribe as boolean}/>
            </section>
        )
    } else {
        return <></>
    }
}