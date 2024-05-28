import one_work_scss from '@/scss/components/profile/categories/OneWork.module.scss'
import {OneWorkData} from "@/components/categories/works/works/one_work/one_page/element/OneWorkData";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {OneWorkPhoto} from "@/components/categories/works/works/one_work/one_page/element/OneWorkPhoto";
import {OneWorkHeader} from "@/components/categories/works/works/one_work/one_page/element/OneWorkHeader";
import {OneWorkFooter} from "@/components/categories/works/works/one_work/one_page/element/OneWorkFooter";
import nav_profile_scss from "@/scss/components/profile/Navigation.module.scss";
import {useState} from "react";
import {
    OneAuctionButtons
} from "@/components/categories/works/auctions/one_auction/one_page/elements/OneAuctionButtons";
import {OneAuctionRates} from "@/components/categories/works/auctions/one_auction/one_page/elements/OneAuctionRates";
import {SetMaxRate} from "@/components/categories/works/auctions/one_auction/one_page/modal_windows/SetMaxRate";
import {SetRate} from "@/components/categories/works/auctions/one_auction/one_page/modal_windows/SetRate";
import {AuctionInterface} from "@/interfaces/auctionInterface";
import {MAIN_PATHS} from "@/paths/main";

interface oneWorkInterface {
    auction: AuctionInterface

    DeleteArt(artId: string, router: AppRouterInstance): void
    SetNewRate(auctionId: string, isAnonymous: boolean, setSetRate: (setMaxRate: boolean) => void,
               setMessage: (message: string) => void): void
    SetMaxRate(auctionId: string, isAnonymous: boolean, maxRate: number, setSetRate: (setMaxRate: boolean) => void): void
}

export const OneAuctionComponent = (props: oneWorkInterface) => {
    const categories = ['Информация', 'Ставки']

    const [navSide, setNavSide] = useState(1)

    const [setMaxRate, setSetMaxRate] = useState(false)
    const [setRate, setSetRate] = useState(false)

    return (
        <section className={one_work_scss.root}>
            <OneWorkPhoto photoUrls={props.auction.photoUrls}/>
            <main className={one_work_scss.art_info + ' ' + one_work_scss.auctions_gap}>
                <OneWorkHeader artistName={props.auction.artistName}
                               name={props.auction.name}
                               createDate={props.auction.createDate}/>
                <section className={one_work_scss.art_price}>
                    {props.auction.lastPrice} ₽
                </section>
                <OneAuctionButtons setSetMaxRate={setSetMaxRate}
                                   setSetRate={setSetRate}
                                   artistId={props.auction.artistId}
                                   status={props.auction.status}
                                   maxRate={props.auction.currentMaxRate}/>
                <section className={one_work_scss.auctions_section}>
                    <nav>
                        <ul className={nav_profile_scss.root + ' ' + one_work_scss.nav_section}>
                            {categories.map((one_category: string, index) => {
                                return (
                                    <li className={navSide === index + 1 ? nav_profile_scss.active : undefined}
                                        onClick={() => setNavSide(index + 1)} key={index}>
                                        <button className={nav_profile_scss.button + ' ' + one_work_scss.auction_nav}>
                                            {one_category}
                                        </button>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                    {navSide === 1 ?
                        <OneWorkData type={props.auction.type} materials={props.auction.materials}
                                     tags={props.auction.tags} size={props.auction.size}
                                     frame={props.auction.frame} customerId={props.auction.customerId}
                                     customerName={props.auction.customerName}
                                     description={props.auction.description}/>
                        : navSide === 2 ?
                            <OneAuctionRates rates={props.auction.customerRates}/>
                            : null}
                </section>
                <OneWorkFooter artistId={props.auction.artistId}
                               status={props.auction.status}
                               artId={props.auction.auctionId}
                               customerId={props.auction.customerId}
                               DeleteArt={props.DeleteArt}
                               path={MAIN_PATHS.EDIT_AUCTION}/>
            </main>
            {setMaxRate ?
                <SetMaxRate setSetMaxRate={setSetMaxRate}
                            SetMaxRate={props.SetMaxRate}
                            auctionId={props.auction.auctionId}
                            lastPrice={props.auction.lastPrice}
                            rate={props.auction.rate}/>
                : null}
            {setRate ?
                <SetRate setSetRate={setSetRate}
                         SetNewRate={props.SetNewRate}
                         lastPrice={props.auction.lastPrice}
                         rate={props.auction.rate}
                         auctionId={props.auction.auctionId}/>
                : null}
        </section>
    )
}