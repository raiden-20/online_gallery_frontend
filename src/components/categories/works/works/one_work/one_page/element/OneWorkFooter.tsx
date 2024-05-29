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
import {AUCTION_STATUS} from "@/interfaces/auctionInterface";
import {ART_AUCTION, ART_STATUS} from "@/paths/elements";

interface OneWorkFooterInterface {
    artistId: string,
    artId: string,
    customerId: string,
    status: string,
    path: string

    DeleteArt(artId: string, router: AppRouterInstance): void
}

export const OneWorkFooter = (props: OneWorkFooterInterface) => {
    const router = useRouter()
    const pathname = usePathname()
    const lastPath = pathname.split('/')[2]
    const type = pathname.split('/')[1]

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

    if (((props.path === MAIN_PATHS.EDIT_ART && props.status === ART_STATUS.AVAILABLE) ||
            (props.path === MAIN_PATHS.EDIT_AUCTION && props.status === AUCTION_STATUS.WAIT))
        && status === 'authenticated' && currentId === artistId &&
        artistId === props.artistId && role === ROLES.ARTIST) {
        return (
            <footer className={one_work_scss.footer}>
                <button className={'no_main_color'}
                        onClick={() => {
                            if (type === ART_AUCTION.ART) {
                                router.push(MAIN_PATHS.EDIT_ART + `/${lastPath}`)
                            }
                            if (type === ART_AUCTION.AUCTION) {
                                router.push(MAIN_PATHS.EDIT_AUCTION + `/${lastPath}`)
                            }
                        }}>
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