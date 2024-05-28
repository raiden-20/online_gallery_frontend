import {ROLES} from "@/paths/main";
import one_work_scss from "@/scss/components/profile/categories/OneWork.module.scss";
import {signin} from "@/store/thunks/authThunk";
import {useSession} from "next-auth/react";
import {useState} from "react";
import Cookies from "js-cookie";
import {AUCTION_STATUS} from "@/interfaces/auctionInterface";

interface OneAuctionButtonsInterface {
    setSetMaxRate(setMaxRate: boolean): void
    status: string

    artistId: string
    maxRate: string | null
    setSetRate(setRate: boolean): void
}

export const OneAuctionButtons = (props: OneAuctionButtonsInterface) => {

    const {status} = useSession();
    const [role] = useState(Cookies.get('role') as string)

    const [artistId] = useState(Cookies.get('artistId') as string)
    if (artistId !== props.artistId && role !== ROLES.ARTIST && props.status === AUCTION_STATUS.AVAILABLE) {
        return (
            <section className={one_work_scss.auction_buttons_section}>
                <button className={props.maxRate !== null ? 'second_plan_button ' : 'main_button ' + one_work_scss.add_to_cart}
                        onClick={() => {
                            if (status === 'authenticated') {
                                props.setSetMaxRate(true)
                            } else {
                                signin()
                            }
                        }}
                        disabled={props.maxRate !== null}>
                    Установить макс. ставку
                </button>
                <button className={props.maxRate !== null ? 'second_plan_button ' :'cancel_button ' + one_work_scss.add_to_cart}
                        onClick={() => {
                            if (status === 'authenticated') {
                                props.setSetRate(true)
                            } else {
                                signin()
                            }
                        }}
                        disabled={props.maxRate !== null}>
                    Сделать ставку
                </button>
            </section>
        )
    } else {
        return <></>
    }

}