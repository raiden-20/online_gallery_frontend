import {PATHS_CATEGORY, ROLES} from "@/paths/main";
import {ORDER_STATUS_RUS} from "@/paths/elements";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import {OneOrderModalWindowSend} from "@/components/orders/one_order/modal_windows/OneOrderModalWindowSend";
import {OneOrderModalWindowChange} from "@/components/orders/one_order/modal_windows/OneOrderModalWindowChange";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {useRouter} from "next/navigation";

interface oneOrderButtonsInterface {
    text: string
    orderId: string
    status: string
    price: number

    SetOrder(orderId: string, comment: string, router: AppRouterInstance): void
    EditOrder(orderId: string, comment: string, router: AppRouterInstance): void
    ReceiveOrder(orderId: string, router: AppRouterInstance): void
    SetTotalCount(count: string): void
}

export const OneOrderButtons = (props: oneOrderButtonsInterface) => {
    const router = useRouter()

    const [role] = useState(Cookies.get('role') as string)

    const [receive, setReceive] = useState(false)

    const [isClicked, setIsClicked] = useState(false)
    const [isChange, setIsChange] = useState(false)

    useEffect(() => {
        if (receive) {
            props.ReceiveOrder(props.orderId, router)
        }
    }, [receive]);

    return (
        <section>
            {role === ROLES.CUSTOMER ?
                props.status === ORDER_STATUS_RUS.PROGRESS ?
                    <button className={'main_button'}
                            onClick={() => setReceive(true)}>
                        Подтвердить получение
                    </button>
                    :
                    props.status === ORDER_STATUS_RUS.AWAIT ?
                        <button className={'main_button'}
                                onClick={() => {
                                    props.SetTotalCount(props.price.toString())
                                    router.push(PATHS_CATEGORY.ORDERS + `/${props.orderId}` + PATHS_CATEGORY.BUY)
                                }
                                }>
                            К оформлению
                        </button>
                        : null
                :
                props.status === ORDER_STATUS_RUS.CREATED ?
                    <button className={'main_button'}
                            onClick={() => setIsClicked(true)}>
                        Подтвердить отправление
                    </button>
                    :
                    props.status === ORDER_STATUS_RUS.PROGRESS ?
                        <button className={'cancel_button'}
                                onClick={() => setIsChange(true)}>
                            Изменить комментарий
                        </button>
                        : null
            }
            {isClicked ?
                <OneOrderModalWindowSend setIsClicked={setIsClicked} SetOrder={props.SetOrder}
                                         orderId={props.orderId}/>
                : null}
            {isChange ?
                <OneOrderModalWindowChange setIsClicked={setIsChange} EditOrder={props.EditOrder}
                                           orderId={props.orderId} text={props.text}/>
                : null}
        </section>
    )
}