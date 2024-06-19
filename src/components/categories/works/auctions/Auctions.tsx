import {Filters} from "@/interfaces/filters";
import {AuctionsComponent} from "@/components/categories/works/auctions/AuctionsComponent";
import {useEffect, useState} from "react";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {useRouter} from "next/navigation";
import {AuctionCategoriesInterface} from "@/interfaces/auctionInterface";

interface workInterface {
    currentFilters: Filters
    auctions: AuctionCategoriesInterface[]
    GetAuctionsCategories(router: AppRouterInstance): void
    input_name: string
    selectedValue: { value: string, label: string }
    setSelectedValue(selectedValue: { value: string, label: string }): void
}

export const Auctions = (props: workInterface) => {
    const router = useRouter()

    const [filteredAuctions, setFilteredAuctions] = useState<AuctionCategoriesInterface[]>([])

    useEffect(() => {
        props.GetAuctionsCategories(router)
    }, []);

    useEffect(() => {
        props.setSelectedValue({value: 'popular', label: 'популярности'})
        const arr = [...props.auctions.sort((first, second) => (second.viewCount - first.viewCount))]
        setFilteredAuctions(arr)
    }, [props.auctions]);

    useEffect(() => {
        if (props.input_name !== '') {
            setFilteredAuctions([...props.auctions.filter(one => one.name.toLowerCase().includes(props.input_name.toLowerCase()))])
        } else {

            switch (props.selectedValue.value) {
                case 'popular' : {
                    const arr = [...props.auctions.sort((first, second) => (second.viewCount - first.viewCount))]
                    setFilteredAuctions(arr)
                    break
                }
                case 'alphabet' : {
                    const arr = [...props.auctions.sort((first, second) => (first.name.localeCompare(second.name)))]
                    setFilteredAuctions(arr)
                }
            }
        }
    }, [props.input_name]);

    useEffect(() => {
        switch (props.selectedValue.value) {
            case 'popular' : {
                const arr = [...props.auctions.sort((first, second) => (second.viewCount - first.viewCount))]
                setFilteredAuctions(arr)
                break
            }
            case 'alphabet' : {
                const arr = [...props.auctions.sort((first, second) => (first.name.localeCompare(second.name)))]
                setFilteredAuctions(arr)
            }
        }
    }, [props.selectedValue]);

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

    if (filteredAuctions.length > 0) {
        return <AuctionsComponent auctions={filteredAuctions}/>
    } else {
        return <></>
    }
}