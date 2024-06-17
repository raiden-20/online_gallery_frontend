import {Filters, SizeInterface} from "@/interfaces/filters";
import {AuctionsComponent} from "@/components/categories/works/auctions/AuctionsComponent";
import {useEffect, useState} from "react";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {usePathname, useRouter} from "next/navigation";
import {AuctionCategoriesInterface} from "@/interfaces/auctionInterface";

interface workInterface {
    currentFilters: Filters
    auctions: AuctionCategoriesInterface[]
    GetAuctionsCategories(router: AppRouterInstance): void
    input_name: string
}

export const Auctions = (props: workInterface) => {
    const router = useRouter()

    const [filteredAuctions, setFilteredAuctions] = useState<AuctionCategoriesInterface[]>([])

    useEffect(() => {
        props.GetAuctionsCategories(router)
    }, []);

    useEffect(() => {
        setFilteredAuctions(props.auctions)
    }, [props.auctions]);

    useEffect(() => {
        if (props.input_name !== '') {
            setFilteredAuctions([...props.auctions.filter(one => one.name.toLowerCase().includes(props.input_name.toLowerCase()))])
        } else {
            setFilteredAuctions(props.auctions)
        }
    }, [props.input_name]);

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