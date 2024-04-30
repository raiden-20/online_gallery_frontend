import {
    CreatePostComponent
} from "@/components/profile/profile_elemets/categories/artist/posts/create_post/CreatePostComponent";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {fileSize} from "@/components/profile/components/setPhoto";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

interface CreatePostInterface {
    setIsCreatePost(isCreatePost: boolean): void
    CreatePrivatePost(title: string, text: string, photos: File[], router: AppRouterInstance, setIsCreatePost: (flag: boolean) => void ): void
}

export const CreatePost = (props: CreatePostInterface) => {
    const router = useRouter()

    const [photoArraySrc, setPhotoArraySrc] = useState<{[key: string]: string}>({})
    const [photoArrayFile, setPhotoArrayFile] = useState<File[]>([])

    const [input_title, setInput_title] = useState('')
    const [input_text, setInput_text] = useState('')

    const [message, setMessage] = useState('')

    const [createPostClicked, setCreatePostClicked] = useState(false)

    const setPhotoArr = (photoFile: FileList) => {
        setMessage('')
        if (photoFile !== null) {
            const file = photoFile[0];
            if (Object.keys(photoArraySrc).length === 4) {
                setMessage('Масимальное кол-во фото: 4')
            } else if (photoFile[0].size <= fileSize) {
                const reader = new FileReader();

                reader.onload = (event) => {
                    if (event.target !== null && event.target.result !== null) {
                        const img = event.target.result.toString()
                        const newPhotoScr = {...photoArraySrc}
                        newPhotoScr[img] = img
                        setPhotoArraySrc(newPhotoScr);
                    }

                };
                reader.readAsDataURL(file);
                setPhotoArrayFile((prevItems: File[]) => [...prevItems, photoFile[0]])
            } else {
                setMessage('Файл слишком большой!')
            }
        }
    }

    useEffect(() => {
        if (createPostClicked) {
            if (photoArrayFile.length !== 0 && input_text !== '') {
                if (input_title !== '') {
                    props.CreatePrivatePost(input_title, input_text, photoArrayFile, router, props.setIsCreatePost)
                } else {
                    setMessage('Введите заголовок поста')
                }
            } else {
                setMessage('В посте обязательно должно быть  фото и текст')
            }
            setCreatePostClicked(false)
        }
    }, [createPostClicked]);

    const deleteInputPhoto = (key: string, index: number) => {
        const newPhotoSrc = {...photoArraySrc};
        const newPhotoFile = [...photoArrayFile];
        delete newPhotoSrc[key]
        newPhotoFile.splice(index, 1);
        setPhotoArraySrc(newPhotoSrc);
        setPhotoArrayFile(newPhotoFile);
    };

    return <CreatePostComponent setIsCreatePost={props.setIsCreatePost}
                                input_title={input_title} setInput_title={setInput_title}
                                input_text={input_text} setInput_text={setInput_text}
                                photoArraySrc={photoArraySrc}
                                deleteInputPhoto={deleteInputPhoto}
                                message={message}
                                setPhotoArr={setPhotoArr}
                                setCreatePostClicked={setCreatePostClicked}/>
}