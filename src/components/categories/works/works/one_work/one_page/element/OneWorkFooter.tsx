import {MAIN_PATHS, ROLES} from "@/paths/main";
import one_work_scss from "@/scss/components/profile/categories/OneWork.module.scss";
import Image from "next/image";
import edit_icon from "@/assets/icons/categories/art/edit.svg";
import delete_icon from "@/assets/icons/categories/art/delete.svg";
import {useSession} from "next-auth/react";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import {usePathname, useRouter} from "next/navigation";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

interface OneWorkFooterInterface {
    artistId: string,
    artId: string,
    customerId: string,
    DeleteArt(artId: string, router: AppRouterInstance): void
}

export const OneWorkFooter = (props: OneWorkFooterInterface) => {
    const router = useRouter()
    const pathname = usePathname()
    const lastPath = pathname.split('/')[2]

    const {status} = useSession();

    const [artistId] = useState(Cookies.get('artistId') as string)
    const [role] = useState(Cookies.get('role') as string)
    const [currentId] = useState(Cookies.get('currentId') as string)

    const [deleteArt, setDeleteArt] = useState(false)

    useEffect(() => {
        if (deleteArt) {
            props.DeleteArt(props.artId, router)
            setDeleteArt(false)
        }
    }, [deleteArt]);


    if (status === 'authenticated' && currentId === artistId &&
    artistId === props.artistId && (props.customerId === '' ||
        props.customerId === null )
    && role === ROLES.ARTIST ) {
        return (
            <footer className={one_work_scss.footer}>
                <button className={'no_main_color'}
                        onClick={() => router.push(MAIN_PATHS.EDIT_ART + `/${lastPath}`)}>
                    <Image src={edit_icon} alt={'edit_icon'}/>
                    <div>Редактировать</div>
                </button>
                <button className={'no_main_color'}
                        onClick={() => setDeleteArt(true)}>
                    <Image src={delete_icon} alt={'edit_icon'}/>
                    <div>Удалить</div>
                </button>
            </footer>
        )
    } else {
        return <></>
    }
}