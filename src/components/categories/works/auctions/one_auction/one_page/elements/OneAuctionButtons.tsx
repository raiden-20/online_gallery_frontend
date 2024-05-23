import {MAIN_PATHS, ROLES} from "@/paths/main";
import {ART_STATUS} from "@/paths/elements";
import one_work_scss from "@/scss/components/profile/categories/OneWork.module.scss";
import {signin} from "@/store/thunks/authThunk";
import {useRouter} from "next/navigation";
import {useSession} from "next-auth/react";
import {useState} from "react";
import Cookies from "js-cookie";

interface OneAuctionButtonsInterface {
    setSetMaxRate(setMaxRate: boolean): void

    setSetRate(setRate: boolean): void
}

export const OneAuctionButtons = (props: OneAuctionButtonsInterface) => {

    const router = useRouter()
    const {status} = useSession();
    const [role] = useState(Cookies.get('role') as string)
    const [customerId] = useState(Cookies.get('customerId') as string)
    const [artistId] = useState(Cookies.get('artistId') as string)

    return (
        <section className={one_work_scss.auction_buttons_section}>
            <button className={'main_button ' + one_work_scss.add_to_cart}
                    onClick={() => props.setSetMaxRate(true)}>
                Установить макс. ставку
            </button>
            <button className={'cancel_button ' + one_work_scss.add_to_cart}
                    onClick={() => props.setSetRate(true)}>
                Сделать ставку
            </button>
        </section>
    )
}