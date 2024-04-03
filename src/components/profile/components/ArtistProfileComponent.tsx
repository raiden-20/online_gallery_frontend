import {HeaderProfileComponent} from "@/components/profile/header/HeaderProfileComponent";
import {ArtistCategoriesProfile} from "@/components/profile/profile_elemets/categories/ArtistCategoriesProfile";
import {Artist} from "@/interfaces/artistInterface";
import React, {useEffect, useState} from "react";
import {setPhoto} from "@/components/profile/components/setPhoto";
interface ArtistProfileInterface {
    artist_data: Artist

    getArtistProfileData(id: string): void

    changeArtistProfileData(artist_name: string, avatar_url: string, cover_url: string,
                            avatar_file: File | undefined, cover_file: File, description: string): void
}

export const ArtistProfileComponent = (props: ArtistProfileInterface) => {

    const [input_coverFile, setInput_coverFile] = useState<File | null>()
    const [input_coverUrl, setInput_coverUrl] = useState(props.artist_data.cover_url)

    const [input_avatarFile, setInput_avatarFile] = useState<File | null>()
    const [input_avatarUrl, setInput_avatarUrl] = useState(props.artist_data.avatar_url)

    const [input_name, setInput_name] = useState(props.artist_data.artist_name)

    const [input_description, setInput_description] = useState(props.artist_data.description)

    const [isNeedChangeData, setIsNeedChangeData] = useState(false)
    const [isChangeDataClicked, setIsChangeDataClicked] = useState(false)

    const [isAvatarDeleted, setIsAvatarDeleted] = useState(false)
    const [isCoverDeleted, setIsCoverDeleted] = useState(false)




    useEffect(() => {
        if (isChangeDataClicked) {
            let avatar = props.artist_data.avatar_url
            let cover = props.artist_data.cover_url
            if (isAvatarDeleted) {
                avatar = 'delete'
            }
            if (isCoverDeleted) {
                cover = 'delete'
            }

            props.changeArtistProfileData(input_name, avatar, cover,
                                            input_avatarFile as File || null, input_coverFile as File || null,
                                            input_description)

            setIsChangeDataClicked(false)
            setIsNeedChangeData(false)
        }
    }, [isChangeDataClicked]);

    useEffect(() => {
        if (input_coverFile === undefined && input_avatarFile === undefined && input_name === props.artist_data.artist_name) {
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

    const cancelChanging = () => {
        setInput_coverFile(null)
        setInput_coverUrl(props.artist_data.cover_url)
        setInput_avatarFile(null)
        setInput_avatarUrl(props.artist_data.avatar_url)
        setInput_name(props.artist_data.artist_name)
        setInput_description(props.artist_data.description)
        setIsNeedChangeData(false)
    }


    return (
        <section>
            <HeaderProfileComponent input_coverUrl={input_coverUrl} input_avatarUrl={input_avatarUrl} input_name={input_name}
                                    isNeedChangeData={isNeedChangeData} cancelChanging={cancelChanging}
                                    setInput_name={setInput_name} setIsChangeDataClicked={setIsChangeDataClicked}
                                    changeInputCover={changeInputCover} changeInputAvatar={changeInputAvatar}
                                    deleteAvatar={deleteAvatar} deleteCover={deleteCover} />
            <ArtistCategoriesProfile input_description={input_description} setInput_description={setInput_description}/>
        </section>
    )
}