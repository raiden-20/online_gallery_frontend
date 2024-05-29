import {Filters, SizeInterface} from "@/interfaces/filters";
import {AuctionsComponent} from "@/components/categories/works/auctions/AuctionsComponent";
import {useEffect} from "react";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {usePathname, useRouter} from "next/navigation";
import {AuctionCategoriesInterface} from "@/interfaces/auctionInterface";

interface workInterface {
    //currentFilters: Filters
    auctions: AuctionCategoriesInterface[]
    GetAuctionsCategories(router: AppRouterInstance): void
}

export const Auctions = (props: workInterface) => {
    const router = useRouter()

    const pathname = usePathname().split('/')
    const lastPath = pathname[pathname.length - 1]

    useEffect(() => {
        props.GetAuctionsCategories(router)
    }, []);

    // return <WorksComponent arts={
    //     props.arts.filter((oneArt) =>
    //         (oneArt.price >= props.currentFilters.priceStart) && (oneArt.price <= props.currentFilters.priceEnd) &&
    //         (props.currentFilters.size.map(oneSize => {
    //             switch (oneSize) {
    //                 case SizeInterface.SMALL : {
    //                     if (oneArt.)
    //                 }
    //                 case SizeInterface.MEDIUM : {
    //
    //                 }
    //                 case SizeInterface.BIG : {
    //
    //                 }
    //                 default : {
    //                     return false
    //                 }
    //             }
    //         }))
    //     )
    // }/>
    return <AuctionsComponent auctions={props.auctions}/>
}