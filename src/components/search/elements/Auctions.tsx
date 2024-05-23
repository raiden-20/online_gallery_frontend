import {useEffect} from "react";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {useRouter} from "next/navigation";
import {ArtShortInterface} from "@/interfaces/artInterface";
import {ART_TYPES_MANY} from "@/paths/elements";
import {AuctionsComponent} from "@/components/categories/works/auctions/AuctionsComponent";

interface AuctionsInterface {
    whoIsClicked: number
    search: ArtShortInterface[],
    input_name: string

    getAllAuctions(type: string, router: AppRouterInstance): void
    getSmthByName(input_name: string, type: string): void,
}

export const Auctions = (props: AuctionsInterface) => {

    const router = useRouter()

    useEffect(() => {
        if (props.input_name === '') {
            props.getAllAuctions('paintings', router)
        }else {
            props.getSmthByName(props.input_name, 'paintings')
        }
    }, [props.input_name, props.whoIsClicked]);

    return (
        <AuctionsComponent arts={props.search}/>
    )
}