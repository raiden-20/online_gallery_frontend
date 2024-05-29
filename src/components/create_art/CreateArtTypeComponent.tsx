import {useState} from "react";
import create_art_scss from '@/scss/components/create_art/CreateArt.module.scss'
import cancel_icon from '@/assets/icons/create_art/cancel.svg'
import Image from "next/image";
import {CreateArtFirstPage} from "@/components/create_art/pages/CreateArtFirstPage";
import {CreateArtSecondPage} from "@/components/create_art/pages/CreateArtSecondPage";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {useRouter} from "next/navigation";
import {MAIN_PATHS} from "@/paths/main";
import Cookies from "js-cookie";
import {CreateArtData} from "@/components/create_art/pages/data/CreateArtData";
import {CreateAuctionData} from "@/components/create_art/pages/auction/CreateAuctionData";
interface createArtInterface {
    CreateArt(name: string, type: string, photos: File[], price: string,
              createDate: string, description: string, size: string,
              tags: string[], materials: string[], isPrivate: boolean, frame: boolean, router: AppRouterInstance,
              setMessage : (message: string) => void): void
    CreateAuction(name: string, type: string, photos: File[], startPrice: string,
                  createDate: string, description: string, size: string,
                  tags: string[], materials: string[], startDate: string,
                  endDate: string, frame: boolean, router: AppRouterInstance,
                  setMessage: (message: string) => void): void
}

export const CreateArtTypeComponent = (props: createArtInterface) => {
    const router = useRouter()

    const [page, setPage] = useState(1)
    const [input_type, setInput_type] = useState('')

    const setCountPage = () => {
        if (page === 4) {
            setPage(page - 2)
        }else if (page - 1 !== 0) {
            setPage(page - 1)
        } else {
            router.push(MAIN_PATHS.PROFILE_ARTIST + `/${Cookies.get('artistId')}`)
        }
    }

    return (
        <section className={create_art_scss.root}>
            <button className={create_art_scss.cancel}
                    onClick={setCountPage}>
                <Image src={cancel_icon} alt={'cancel_icon'}/>
                <div>Назад</div>
            </button>
            {page === 1 ? <CreateArtFirstPage setPage={setPage} setInput_type={setInput_type}/>
                :
            page === 2 ? <CreateArtSecondPage setPage={setPage}/>
                :
            page === 3 ? <CreateArtData CreateArt={props.CreateArt} input_type={input_type}/>
                 :
            page === 4 ? <CreateAuctionData CreateAuction={props.CreateAuction}
                                            input_type={input_type}/> :
            null}
        </section>
    )
}