import {
    CreatePostComponent
} from "@/components/profile/profile_elemets/categories/artist/posts/create_post/CreatePostComponent";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {fileSize} from "@/components/profile/components/setPhoto";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {OnePostInterface} from "@/interfaces/PostsInterface";

interface EditPostInterface {
    onePost: OnePostInterface
    setIsCreatePost(isCreatePost: boolean): void
    EditPrivatePost(postId: string, title: string, text: string, newPhotos: File[], deletePhotoUrls: string[], router: AppRouterInstance): void
}

export const EditPost = (props: EditPostInterface) => {
    const router = useRouter()

    const [photoArraySrc, setPhotoArraySrc] = useState<string[]>(props.onePost.photoUrls)
    const [photoArrayFile, setPhotoArrayFile] = useState<File[]>([])
    const [deletePhotoUrls, setDeletePhotoUrls] = useState<string[]>([])

    const [input_title, setInput_title] = useState(props.onePost.title)
    const [input_text, setInput_text] = useState(props.onePost.text)

    const [message, setMessage] = useState('')

    const [editPostClicked, setEditPostClicked] = useState(false)

    const setPhotoArr = (photoFile: FileList) => {
        setMessage('')
        if (photoFile !== null) {
            const file = photoFile[0];
            if (photoArraySrc?.length === 4) {
                setMessage('Масимальное кол-во фото: 4')
            } else if (photoFile[0].size <= fileSize) {
                const reader = new FileReader();

                reader.onload = (event) => {
                    if (event.target !== null && event.target.result !== null) {
                        // @ts-ignore
                        setPhotoArraySrc(prevItems => [...prevItems, event.target.result.toString()]);
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
        if (editPostClicked) {
            if (photoArrayFile.length !== 0 || input_text !== '') {
                if (input_title !== '') {
                    props.EditPrivatePost(props.onePost.postId, input_title, input_text, photoArrayFile, deletePhotoUrls, router)
                } else {
                    setMessage('Введите заголовок поста')
                }
            } else {
                setMessage('В посте обязательно должно быть или фото или текст')
            }
            setEditPostClicked(false)
        }
    }, [editPostClicked]);

    const deleteInputPhoto = (index: number) => {
        const newPhotoSrc = [...photoArraySrc];
        const newPhotoFile = [...photoArrayFile];
        newPhotoSrc.splice(index, 1);
        newPhotoFile.splice(index, 1);
        setPhotoArraySrc(newPhotoSrc);
        setPhotoArrayFile(newPhotoFile);

        props.onePost.photoUrls.forEach((photo: string) => {
            if (photo === photoArraySrc[index]) {
                const newDeleteUrls = deletePhotoUrls
                newDeleteUrls.push(index.toString())
                setDeletePhotoUrls(newDeleteUrls)
            }
        })
    };

    return <CreatePostComponent setIsCreatePost={props.setIsCreatePost}
                                input_title={input_title} setInput_title={setInput_title}
                                input_text={input_text} setInput_text={setInput_text}
                                photoArraySrc={photoArraySrc}
                                deleteInputPhoto={deleteInputPhoto}
                                message={message}
                                setPhotoArr={setPhotoArr}
                                setCreatePostClicked={setEditPostClicked}/>
}