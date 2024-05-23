import one_work_scss from '@/scss/components/profile/categories/OneWork.module.scss'
import {OneWorkData} from "@/components/categories/works/works/one_work/one_page/element/OneWorkData";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {ArtInterface} from "@/interfaces/artInterface";
import {OneWorkPhoto} from "@/components/categories/works/works/one_work/one_page/element/OneWorkPhoto";
import {OneWorkHeader} from "@/components/categories/works/works/one_work/one_page/element/OneWorkHeader";
import {OneWorkFooter} from "@/components/categories/works/works/one_work/one_page/element/OneWorkFooter";
import nav_profile_scss from "@/scss/components/profile/Navigation.module.scss";
import {useState} from "react";
import {
    OneAuctionButtons
} from "@/components/categories/works/auctions/one_auction/one_page/elements/OneAuctionButtons";
import {OneAuctionRates} from "@/components/categories/works/auctions/one_auction/one_page/elements/OneAuctionRates";

interface oneWorkInterface {
    one_work: ArtInterface
    DeleteArt(artId: string, router: AppRouterInstance): void
    AddArtToCart(artId: string, router: AppRouterInstance): void
}

export const OneAuctionComponent = (props: oneWorkInterface) => {
    const categories = [ 'Информация' , 'Ставки']

    const [navSide, setNavSide] = useState(1)

    return (
        <section className={one_work_scss.root}>
            <OneWorkPhoto photoUrls={props.one_work.photoUrls}/>
            <main className={one_work_scss.art_info + ' ' + one_work_scss.auctions_gap}>
                <OneWorkHeader artistName={props.one_work.artistName}
                               name={props.one_work.name}
                               createDate={props.one_work.createDate}/>
                <section className={one_work_scss.art_price}>
                    {props.one_work.price} ₽
                </section>
                <OneAuctionButtons/>
                <section className={one_work_scss.auctions_section}>
                    <nav>
                        <ul className={nav_profile_scss.root + ' ' + one_work_scss.nav_section}>
                            {categories.map((one_category: string, index) => {
                                return (
                                    <li className={navSide === index + 1 ? nav_profile_scss.active : undefined}
                                        onClick={() => setNavSide(index + 1)} key={index}>
                                        <button className={nav_profile_scss.button + ' ' +  one_work_scss.auction_nav}>
                                            {one_category}
                                        </button>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                    {navSide === 1 ?
                        <OneWorkData type={props.one_work.type} materials={props.one_work.materials}
                                     tags={props.one_work.tags} size={props.one_work.size}
                                     frame={props.one_work.frame} customerId={props.one_work.customerId}
                                     customerName={props.one_work.customerName}
                                     description={props.one_work.description}/>
                        : navSide === 2 ?
                            <OneAuctionRates/>
                            : null}
                </section>

                <OneWorkFooter artistId={props.one_work.artistId}
                               artId={props.one_work.artId}
                               customerId={props.one_work.customerId}
                               DeleteArt={props.DeleteArt}/>
            </main>
        </section>
    )
}