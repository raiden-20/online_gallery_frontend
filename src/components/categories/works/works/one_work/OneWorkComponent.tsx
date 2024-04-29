import one_work_scss from '@/scss/components/profile/categories/OneWork.module.scss'
import {useEffect, useState} from "react";
import Cookies from "js-cookie";

import edit_icon from '@/assets/icons/categories/art/edit.svg'
import delete_icon from '@/assets/icons/categories/art/delete.svg'
import Image from "next/image";
import {OneWorkData} from "@/components/categories/works/works/one_work/element/OneWorkData";
import {OneWorkButton} from "@/components/categories/works/works/one_work/element/OneWorkButton";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {ArtInterface} from "@/interfaces/artInterface";
import {useRouter} from "next/navigation";
import {AddArtToCart} from "@/store/thunks/cartThunk";

interface oneWorkInterface {
    one_work: ArtInterface
    GetArt(artId: string, currentId: string, router: AppRouterInstance): void
    DeleteArt(artId: string, router: AppRouterInstance): void
    AddArtToCart(artId: string): void
}

export const OneWorkComponent = (props: oneWorkInterface) => {
    const router = useRouter()
    const [currentId] = useState(Cookies.get('currentId') as string)
    const [deleteArt, setDeleteArt] = useState(false)

    useEffect(() => {
        props.GetArt(props.one_work.artId, currentId, router)
    }, []);

    useEffect(() => {
        if (deleteArt) {
            props.DeleteArt(props.one_work.artId, router)
            setDeleteArt(false)
        }
    }, [deleteArt]);

    return (
        <section className={one_work_scss.root}>
            <ul className={one_work_scss.photo_section}>
                {props.one_work.photoUrls.map((onePhoto: string) => {
                    return (
                        <img src={onePhoto} className={one_work_scss.one_photo} crossOrigin="anonymous"
                             alt={'art photo'}/>
                    )
                })}
            </ul>
            <main className={one_work_scss.art_info}>
                <header className={one_work_scss.art_info_header}>
                    <div className={one_work_scss.art_artist}>Художник</div>
                    <div className={one_work_scss.art_name}>{props.one_work.name},
                        {props.one_work.createDate.substring(6, props.one_work.createDate.length - 1)}</div>
                </header>
                <section className={one_work_scss.art_price}>
                    {props.one_work.price} ₽
                </section>
                <OneWorkButton status={props.one_work.status}
                               artistId={props.one_work.artistId}
                               AddArtToCart={props.AddArtToCart}
                               artId={props.one_work.artId}/>
                <OneWorkData one_work={props.one_work}/>
                {currentId === props.one_work.artistId ?
                    <footer className={one_work_scss.footer}>
                        <button className={'no_main_color'}>
                            <Image src={edit_icon} alt={'edit_icon'}/>
                            <div>Редактировать</div>
                        </button>
                        <button className={'no_main_color'}
                                onClick={() => setDeleteArt(true)}>
                            <Image src={delete_icon} alt={'edit_icon'}/>
                            <div>Удалить</div>
                        </button>
                    </footer>
                    : null
                }
            </main>
        </section>
    )
}