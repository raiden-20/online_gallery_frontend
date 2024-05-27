import {useEffect} from "react";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {useRouter} from "next/navigation";
import {AuctionsComponent} from "@/components/categories/works/auctions/AuctionsComponent";
import {AuctionCategoriesInterface} from "@/interfaces/auctionInterface";

interface AuctionsInterface {
    whoIsClicked: number
    search: AuctionCategoriesInterface[],
    input_name: string

    getAllAuctions(router: AppRouterInstance): void
    getSmthByName(input_name: string, type: string): void,
}

export const Auctions = (props: AuctionsInterface) => {
    const router = useRouter()

    useEffect(() => {
        if (props.input_name === '') {
            props.getAllAuctions(router)
        }else {
            props.getSmthByName(props.input_name, 'auction')
        }
    }, [props.input_name, props.whoIsClicked]);

    return (
        <AuctionsComponent auctions={props.search}/>
    )
}