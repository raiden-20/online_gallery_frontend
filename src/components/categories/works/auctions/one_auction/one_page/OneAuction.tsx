import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {useEffect, useState} from "react";
import {usePathname, useRouter} from "next/navigation";
import {OneAuctionComponent} from "@/components/categories/works/auctions/one_auction/one_page/OneAuctionComponent";
import Cookies from "js-cookie";
import {AuctionInterface, CustomerRate} from "@/interfaces/auctionInterface";
import {ROLES} from "@/paths/main";
import {PathsAPI} from "@/api/api_main";
import {fetchEventSource} from "@microsoft/fetch-event-source";
import {SetNewCustomerRate} from "@/store/thunks/auctionsThunk";
import {useSession} from "next-auth/react";

interface oneWorkInterface {
    auction: AuctionInterface

    GetAuction(auctionId: string, currentId: string, router: AppRouterInstance): void
    DeleteAuction(id: string, router: AppRouterInstance): void
    SetNewRate(auctionId: string, isAnonymous: boolean, setSetRate: (setMaxRate: boolean) => void,
               setMessage: (message: string) => void): void
    SetMaxRate(auctionId: string, isAnonymous: boolean, maxRate: string,
               setSetRate: (setMaxRate: boolean) => void): void
    SetNewCustomerRate(customerRate: CustomerRate, router: AppRouterInstance): void
}

export const OneAuction = (props: oneWorkInterface) => {

    const router = useRouter()

    const pathname = usePathname()
    const lastPath = pathname.split('/')[2]

    const [currentId] = useState(Cookies.get('customerId') as string)
    const [customerId, setCustomerId] = useState('')
    const [artistId, setArtistId] = useState('')
    const [role, setRole] = useState('')

    const {status} = useSession()

    useEffect(() => {
        props.GetAuction(lastPath, currentId, router)
    }, []);

    // useEffect(() => {
    //
    //     setCustomerId(Cookies.get('customerId') as string)
    //     setArtistId(Cookies.get('artistId') as string)
    //     setRole(Cookies.get('role') as string)
    //
    //     debugger
    //
    //     const getRateSSE = async () => {
    //         const who = role === ROLES.CUSTOMER ? customerId : role === ROLES.ARTIST ? artistId : null
    //         await fetchEventSource(PathsAPI.BASE + PathsAPI.AUCTION + PathsAPI.RATES + `/userId=${who}&auctionId=${props.auction.auctionId}`,
    //             {
    //                 headers: {
    //                     'Content-Type': 'multipart/form-data; boundary=-------23456789012347',
    //                 },
    //                 onmessage(ev) {
    //                     const res = JSON.parse(ev.data)
    //                     props.SetNewCustomerRate(res.data, router)
    //                 },
    //                 onclose() {
    //                     console.log("Connection closed by the server");
    //                 },
    //
    //             })
    //
    //     }
    //     if (status === 'authenticated' && (customerId !== '' && customerId !== undefined)) {
    //         getRateSSE()
    //     }
    //
    // }, [status, customerId]);

    return <OneAuctionComponent auction={props.auction}
                                DeleteArt={props.DeleteAuction}
                                SetMaxRate={props.SetMaxRate} SetNewRate={props.SetNewRate}/>
}