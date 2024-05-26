import one_work_scss from "@/scss/components/profile/categories/OneWork.module.scss";
import {CustomerRate} from "@/interfaces/auctionInterface";
interface OneAuctionRatesInterface {
    rates: CustomerRate[]
}

export const OneAuctionRates = (props: OneAuctionRatesInterface) => {



    return (
        <ul className={one_work_scss.auction_rates_ul}>
            {props.rates.map((oneRate, index) => {
                return (
                    <li className={one_work_scss.auction_rates_one} key={index}>
                        <img src={oneRate.customerUrl === '' ? '/default_avatar_profile.svg'
                                    : oneRate.customerUrl}
                             className={one_work_scss.auction_rates_one_img}
                             alt={'user img'}/>
                        <section>
                            {oneRate.customerName}
                        </section>
                        <section>
                            {oneRate.rate} ₽
                        </section>
                    </li>
                )
            })}
        </ul>
    )
}