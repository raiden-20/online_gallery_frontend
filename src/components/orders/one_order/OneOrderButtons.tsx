import {ROLES} from "@/paths/main";
import {ORDER_STATUS} from "@/paths/elements";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import {OneOrderModalWindowSend} from "@/components/orders/one_order/modal_windows/OneOrderModalWindowSend";
import {OneOrderModalWindowChange} from "@/components/orders/one_order/modal_windows/OneOrderModalWindowChange";

interface oneOrderButtonsInterface {
    orderId: string
    status: string
    SetOrder(orderId: string, comment: string): void
    EditOrder(orderId: string, comment: string): void
    ReceiveOrder(orderId: string): void
}

export const OneOrderButtons = (props: oneOrderButtonsInterface) => {

    const [role] = useState(Cookies.get('role') as string)

    const [receive, setReceive] = useState(false)

    const [isClicked, setIsClicked] = useState(false)
    const [isChange, setIsChange] = useState(false)

    useEffect(() => {
        if (receive) {
            props.ReceiveOrder(props.orderId)
        }
    }, [receive]);

    return (
        <section>
            {role === ROLES.CUSTOMER ?
                props.status === ORDER_STATUS.PROGRESS ?
                    <button className={'main_button'}
                            onClick={() => setReceive(true)}>
                        Подтвердить получение
                    </button>
                    : null
                :
                props.status === ORDER_STATUS.CREATED ?
                    <button className={'main_button'}
                            onClick={() => setIsClicked(true)}>
                        Подтвердить отправление
                    </button>
                    :
                    props.status === ORDER_STATUS.PROGRESS ?
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
                                           orderId={props.orderId}/>
                : null}
        </section>
    )
}