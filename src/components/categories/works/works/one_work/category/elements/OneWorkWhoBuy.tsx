import works_profile_scss from "@/scss/components/profile/categories/WorksProfile.module.scss";
import {useState} from "react";

export const OneWorkWhoBuy = (props: {customerId: string, avatarUrl: string, customerName: string}) => {

    const [isHoverWhoBuy, setIsHoverWhoBuy] = useState(false)

    if (props.customerId !== null) {
        return (
            <section className={works_profile_scss.who_buy_section}
                     onMouseEnter={() => setIsHoverWhoBuy(true)}
                     onMouseLeave={() => setIsHoverWhoBuy(false)}>
                <section className={works_profile_scss.who_buy_data}>
                    <img
                        src={props.avatarUrl === '' || props.avatarUrl === ' ' ?
                            '/default_avatar_profile.svg' : props.avatarUrl}
                        alt={'avatar'} crossOrigin={"anonymous"}/>
                    <div className={!isHoverWhoBuy ? works_profile_scss.who_buy_name_hide : undefined}>
                        {props.customerName === 'anonymous' ? 'Анонимный покупатель' : props.customerName}
                    </div>
                </section>
            </section>
        )
    } else {
        return <></>
    }
}