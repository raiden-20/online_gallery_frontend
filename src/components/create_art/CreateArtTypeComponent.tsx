import {useState} from "react";

import create_art_scss from '@/scss/components/create_art/CreateArt.module.scss'

import cancel_icon from '@/assets/icons/create_art/cancel.svg'
import Image from "next/image";
import {CreateArtDataComponent} from "@/components/create_art/pages/data/CreateArtDataComponent";
import settings_scss from "@/scss/components/settings/Settings.module.scss";
import next_icon from '@/assets/icons/create_art/next.svg'
import {CreateArtFirstPage} from "@/components/create_art/pages/CreateArtFirstPage";
import {CreateArtSecondPage} from "@/components/create_art/pages/CreateArtSecondPage";

export const CreateArtTypeComponent = () => {
    const [page, setPage] = useState(1)

    const setCountPage = () => {
        if (page - 1 !== 0) {
            setPage(page - 1)
        } else {
            // todo
        }
    }




    return (
        <section className={create_art_scss.root}>
            <button className={create_art_scss.cancel}
                    onClick={setCountPage}>
                <Image src={cancel_icon} alt={'cancel_icon'}/>
                <div>Назад</div>
            </button>
            {page === 1 ? <CreateArtFirstPage setPage={setPage}/>
                :
            page === 2 ? <CreateArtSecondPage setPage={setPage}/>
                :
            page === 3 ? <CreateArtDataComponent/>
                 :
            null}
        </section>
    )
}