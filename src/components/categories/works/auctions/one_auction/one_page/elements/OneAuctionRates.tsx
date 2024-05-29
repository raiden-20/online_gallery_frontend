import one_work_scss from "@/scss/components/profile/categories/OneWork.module.scss";
import {CustomerRate} from "@/interfaces/auctionInterface";
import {ANONYMOUS, ANONYMOUS_RUS} from "@/paths/elements";
interface OneAuctionRatesInterface {
    rates: CustomerRate[]
}

export const OneAuctionRates = (props: OneAuctionRatesInterface) => {


    return (
        <ul className={one_work_scss.auction_rates_ul}>
            {props.rates !== null ?
                props.rates.map((oneRate, index) => {
                    return (
                        <li className={one_work_scss.auction_rates_one} key={index}>
                            <img src={oneRate.customerUrl === '' || oneRate.customerUrl === ANONYMOUS ? '/default_avatar_profile.svg'
                                : oneRate.customerUrl}
                                 className={one_work_scss.auction_rates_one_img}
                                 alt={'user img'}/>
                            <section>
                                {oneRate.customerName === ANONYMOUS ? ANONYMOUS_RUS : oneRate.customerName}
                            </section>
                            <section>
                                {oneRate.rate} ₽
                            </section>
                        </li>
                    )
                }).reverse()
            :
            <section className={'no_elements'}>
                Для просмотра ставок войдите в аккаунт
            </section>}
            {}
        </ul>
    )
}