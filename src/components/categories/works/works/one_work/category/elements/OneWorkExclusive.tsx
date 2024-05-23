import {useState} from "react";
import works_profile_scss from "@/scss/components/profile/categories/WorksProfile.module.scss";
import Image from "next/image";
import star_icon from "@/assets/icons/art/star.svg";

export const OneWorkExclusive = (props: {isPrivate: boolean, customerId: string}) => {

    const [isHoverStar, setIsHoveStart] = useState(false)

    if (props.isPrivate && props.customerId !== null) {
        return (
            <section className={works_profile_scss.who_buy_section + ' ' + works_profile_scss.star_section}
                     onMouseEnter={() => setIsHoveStart(true)}
                     onMouseLeave={() => setIsHoveStart(false)}>
                <section className={works_profile_scss.who_buy_data}>
                    <Image src={star_icon} alt={'star'} width={0} height={0}/>
                    <div className={!isHoverStar ? works_profile_scss.who_buy_name_hide : undefined}>
                        Только для поддержавших
                    </div>
                </section>
            </section>
        )
    } else {
        return <></>
    }
}