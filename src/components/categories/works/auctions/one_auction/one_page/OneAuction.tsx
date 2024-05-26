import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {useEffect, useState} from "react";
import {usePathname, useRouter} from "next/navigation";
import {OneAuctionComponent} from "@/components/categories/works/auctions/one_auction/one_page/OneAuctionComponent";
import Cookies from "js-cookie";
import {AuctionInterface} from "@/interfaces/auctionInterface";

interface oneWorkInterface {
    auction: AuctionInterface

    GetAuction(auctionId: string, currentId: string, router: AppRouterInstance): void
    DeleteAuction(id: string, router: AppRouterInstance): void
    SetNewRate(auctionId: string, isAnonymous: boolean, setSetRate: (setMaxRate: boolean) => void,
               setMessage: (message: string) => void): void
    SetMaxRate(auctionId: string, isAnonymous: boolean, maxRate: string,
               setSetRate: (setMaxRate: boolean) => void): void
}

export const OneAuction = (props: oneWorkInterface) => {

    const router = useRouter()

    const pathname = usePathname()
    const lastPath = pathname.split('/')[2]

    const [currentId] = useState(Cookies.get('customerId') as string)

    useEffect(() => {
        props.GetAuction(lastPath, currentId, router)
    }, []);

    return <OneAuctionComponent auction={props.auction}
                                DeleteArt={props.DeleteAuction}
                                SetMaxRate={props.SetMaxRate} SetNewRate={props.SetNewRate}/>
}