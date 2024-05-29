import one_work_scss from "@/scss/components/profile/categories/OneWork.module.scss";
import {useSession} from "next-auth/react";
import {signin} from "@/store/thunks/authThunk";
import {ART_STATUS} from "@/paths/elements";
import {useRouter} from "next/navigation";
import {MAIN_PATHS, ROLES} from "@/paths/main";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

interface oneWorkInterface {
    artId: string
    status: string,
    artistId: string,
    AddArtToCart(artId: string, router: AppRouterInstance): void
}

export const OneWorkButton = (props: oneWorkInterface) => {
    const router = useRouter()
    const {status} = useSession();
    const [role] = useState(Cookies.get('role') as string)
    const [artistId] = useState(Cookies.get('artistId') as string)

    const [addToCart, setAddToCart] = useState(false)

    useEffect(() => {
        if (addToCart) {
            props.AddArtToCart(props.artId, router)
            setAddToCart(false)
        }
    }, [addToCart]);

    return (
        <section>
            {artistId !== props.artistId && role !== ROLES.ARTIST ?
                props.status === ART_STATUS.AVAILABLE ?
                    <button className={'main_button ' + one_work_scss.add_to_cart}
                            onClick={() => {
                                if (status === 'authenticated') {
                                    setAddToCart(true)
                                } else {
                                    signin()
                                }
                            }}>
                        Добавить в корзину
                    </button>
                :
                    props.status === ART_STATUS.CART ?
                        <button className={'cancel_button ' + one_work_scss.add_to_cart}
                                onClick={() => {
                                    if (status === 'authenticated') {
                                        router.push(MAIN_PATHS.CART)
                                    } else {
                                        signin()
                                    }
                                }}>
                            Открыть корзину
                        </button>
                    : null
            : null
            }
        </section>
    )
}