import {Filters, SizeInterface, SizeInterfaceValue} from "@/interfaces/filters";
import {AuctionsComponent} from "@/components/categories/works/auctions/AuctionsComponent";
import {useEffect, useState} from "react";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {useRouter} from "next/navigation";
import {AuctionCategoriesInterface} from "@/interfaces/auctionInterface";
import {isCurrentFiltersEmpty} from "../../../../../utils/tests";

interface workInterface {
    currentFilters: Filters
    auctions: AuctionCategoriesInterface[]
    GetAuctionsCategories(router: AppRouterInstance): void
    input_name: string
    selectedValue: { value: string, label: string }
    setSelectedValue(selectedValue: { value: string, label: string }): void
    setFilters: boolean
    setSetFilters(setFilters: boolean): void
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

    const isSameSize = (oneArt: AuctionCategoriesInterface) : boolean => {
        let flag = false
        props.currentFilters.size.forEach(sizeName => {
            switch (sizeName) {
                case SizeInterface.SMALL : {
                    if (Number.parseInt(oneArt.size.split('x')[0]) <= SizeInterfaceValue.SMALL &&
                        Number.parseInt(oneArt.size.split('x')[1]) <= SizeInterfaceValue.SMALL) {
                        flag = true
                    }
                    break
                }
                case SizeInterface.MEDIUM : {
                    if (Number.parseInt(oneArt.size.split('x')[0]) > SizeInterfaceValue.SMALL &&
                        Number.parseInt(oneArt.size.split('x')[0]) < SizeInterfaceValue.BIG &&
                        Number.parseInt(oneArt.size.split('x')[1]) > SizeInterfaceValue.SMALL &&
                        Number.parseInt(oneArt.size.split('x')[1]) < SizeInterfaceValue.BIG) {
                        flag = true
                    }
                    break
                }
                case SizeInterface.BIG : {
                    if (Number.parseInt(oneArt.size.split('x')[0]) >= SizeInterfaceValue.BIG &&
                        Number.parseInt(oneArt.size.split('x')[1]) >= SizeInterfaceValue.BIG) {
                        flag = true
                    }
                    break
                }
            }
        })

        return flag
    }

    useEffect(() => {
        if (props.setFilters) {
            if (isCurrentFiltersEmpty(props.currentFilters)) {
                setFilteredAuctions(props.auctions)
            } else {
                const arr = [...props.auctions]
                const arrr= arr.filter((oneArt) =>
                    (Number.parseInt(oneArt.lastPrice) >= Number.parseInt(props.currentFilters.priceStart)) && (Number.parseInt(oneArt.lastPrice) <= Number.parseInt(props.currentFilters.priceEnd) ||
                        oneArt.tags.some(val => props.currentFilters.tags.includes(val)) || oneArt.materials.some(val => props.currentFilters.materials.includes(val)) ||
                        props.currentFilters.artists.includes(oneArt.artistId) || oneArt.frame === props.currentFilters.frame ||
                        isSameSize(oneArt)))
                setFilteredAuctions(arrr)
            }
            props.setSetFilters(false)
        }
    }, [props.setFilters]);

    if (filteredAuctions.length > 0) {
        return <AuctionsComponent auctions={filteredAuctions}/>
    } else {
        return <></>
    }
}