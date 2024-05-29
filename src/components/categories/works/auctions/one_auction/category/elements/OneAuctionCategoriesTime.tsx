import works_profile_scss from "@/scss/components/profile/categories/WorksProfile.module.scss";
import {useEffect, useState} from "react";
import {auctionTimeMessage} from "../../../../../../../../utils/tests";
import {AUCTION_STATUS} from "@/interfaces/auctionInterface";

interface OneAuctionCategoriesTimeInterface {
    startTime: string
    endTime: string
    status: string
}
export const OneAuctionCategoriesTime = (props: OneAuctionCategoriesTimeInterface) => {

    const [time, setTime] = useState('')

    useEffect(() => {
        setTime(auctionTimeMessage(props.startTime, props.endTime))
    }, []);

    return (
        <section className={props.status === AUCTION_STATUS.AVAILABLE ?
            works_profile_scss.auction_time_section + ' ' + works_profile_scss.auction_active :
            works_profile_scss.auction_time_section + ' ' + works_profile_scss.auction_no_active
        }>
            {time}
        </section>
    )
}