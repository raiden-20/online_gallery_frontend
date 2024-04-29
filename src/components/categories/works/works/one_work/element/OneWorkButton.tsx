import one_work_scss from "@/scss/components/profile/categories/OneWork.module.scss";
import {useSession} from "next-auth/react";
import {signin} from "@/store/thunks/authThunk";
import {ART_STATUS} from "@/paths/elements";
import {useRouter} from "next/navigation";
import {MAIN_PATHS} from "@/paths/main";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";

interface oneWorkInterface {
    artId: string
    status: string,
    artistId: string,
    AddArtToCart(artId: string): void
}

export const OneWorkButton = (props: oneWorkInterface) => {
    const router = useRouter()
    const {status} = useSession();
    const [currentId] = useState(Cookies.get('currentId') as string)

    const [addToCart, setAddToCart] = useState(false)

    useEffect(() => {
        if (addToCart) {
            props.AddArtToCart(props.artId)
            setAddToCart(false)
        }
    }, [addToCart]);

    return (
        <section>
            {currentId !== props.artistId ?
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
                        <button className={'cansel_button ' + one_work_scss.add_to_cart}
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