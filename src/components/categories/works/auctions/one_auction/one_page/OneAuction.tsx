import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {useEffect, useState} from "react";
import {usePathname, useRouter} from "next/navigation";
import {OneAuctionComponent} from "@/components/categories/works/auctions/one_auction/one_page/OneAuctionComponent";
import Cookies from "js-cookie";
import {AuctionInterface, CustomerRate} from "@/interfaces/auctionInterface";
import {ROLES} from "@/paths/main";
import {PathsAPI} from "@/api/api_main";
import {fetchEventSource} from "@microsoft/fetch-event-source";
import {useSession} from "next-auth/react";

interface oneWorkInterface {
    auction: AuctionInterface

    GetAuction(auctionId: string, currentId: string, router: AppRouterInstance): void
    DeleteAuction(id: string, router: AppRouterInstance): void
    SetNewRate(auctionId: string, isAnonymous: boolean, setSetRate: (setMaxRate: boolean) => void,
               setMessage: (message: string) => void): void
    SetMaxRate(auctionId: string, isAnonymous: boolean, maxRate: number,
               setSetRate: (setMaxRate: boolean) => void): void
    SetNewCustomerRate(customerRate: CustomerRate, router: AppRouterInstance): void
}

export const OneAuction = (props: oneWorkInterface) => {

    const router = useRouter()

    const pathname = usePathname()
    const lastPath = pathname.split('/')[2]

    const [currentId] = useState(Cookies.get('customerId') as string)
    const [customerId, setCustomerId] = useState(Cookies.get('customerId') as string)
    const [artistId, setArtistId] = useState(Cookies.get('artistId') as string)
    const [role, setRole] = useState(Cookies.get('role') as string)

    const {status} = useSession()

    useEffect(() => {
        props.GetAuction(lastPath, currentId === undefined ? 'null' : currentId, router)
    }, []);

    useEffect(() => {

        setCustomerId(Cookies.get('customerId') as string)
        setArtistId(Cookies.get('artistId') as string)
        setRole(Cookies.get('role') as string)
        const controller = new AbortController();
        const getRateSSE = async () => {
            const signal = controller.signal
            const who = role === ROLES.CUSTOMER ? customerId : role === ROLES.ARTIST ? artistId : null
            const url = PathsAPI.BASE + `/auction/rates/userId=${who}&auctionId=${lastPath}`
            await fetchEventSource(url,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data; boundary=-------234567890156t72347'
                    },
                    signal: signal,
                    onmessage(ev) {
                        const res = JSON.parse(ev.data)
                        props.SetNewCustomerRate(res, router)
                    },
                    onclose() {
                        console.log("Connection closed by the server");
                    },

                })

        }
        if (status === 'authenticated' && (customerId !== '' && customerId !== undefined) && lastPath !== '') {
            getRateSSE().then()
        }
        return () => {
            controller.abort()
        }

    }, [status]);

    return <OneAuctionComponent auction={props.auction}
                                DeleteArt={props.DeleteAuction}
                                SetMaxRate={props.SetMaxRate} SetNewRate={props.SetNewRate}/>
}