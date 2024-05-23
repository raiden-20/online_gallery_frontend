import one_work_scss from "@/scss/components/profile/categories/OneWork.module.scss";

export const OneAuctionRates = () => {

    return (
        <ul className={one_work_scss.auction_rates_ul}>
            <li className={one_work_scss.auction_rates_one}>
                <img src={'/default_avatar_profile.svg'}
                     className={one_work_scss.auction_rates_one_img}
                     alt={'user img'}/>
                <section>
                    Имя
                </section>
                <section>
                    100000 ₽
                </section>
            </li>
            <li className={one_work_scss.auction_rates_one}>
                <img src={'/default_avatar_profile.svg'}
                     className={one_work_scss.auction_rates_one_img}
                     alt={'user img'}/>
                <section>
                    Имя
                </section>
                <section>
                    100000 ₽
                </section>
            </li>
            <li className={one_work_scss.auction_rates_one}>
                <img src={'/default_avatar_profile.svg'}
                     className={one_work_scss.auction_rates_one_img}
                     alt={'user img'}/>
                <section>
                    Имя
                </section>
                <section>
                    100000 ₽
                </section>
            </li>
            <li className={one_work_scss.auction_rates_one}>
                <img src={'/default_avatar_profile.svg'}
                     className={one_work_scss.auction_rates_one_img}
                     alt={'user img'}/>
                <section>
                    Имя
                </section>
                <section>
                    100000 ₽
                </section>
            </li>
            <li className={one_work_scss.auction_rates_one}>
                <img src={'/default_avatar_profile.svg'}
                     className={one_work_scss.auction_rates_one_img}
                     alt={'user img'}/>
                <section>
                    Имя
                </section>
                <section>
                    100000 ₽
                </section>
            </li>
        </ul>
    )
}