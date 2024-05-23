import {ArtInterface} from "@/interfaces/artInterface";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {useEffect} from "react";
import {usePathname, useRouter} from "next/navigation";
import {OneAuctionComponent} from "@/components/categories/works/auctions/one_auction/one_page/OneAuctionComponent";

interface oneWorkInterface {
    one_work: ArtInterface

    GetArt(artId: string, router: AppRouterInstance): void
    DeleteArt(artId: string, router: AppRouterInstance): void
    AddArtToCart(artId: string, router: AppRouterInstance): void
}

export const OneAuction = (props: oneWorkInterface) => {

    const router = useRouter()

    const pathname = usePathname()
    const lastPath = pathname.split('/')[2]

    useEffect(() => {

        props.GetArt(lastPath, router)
    }, []);

    return <OneAuctionComponent one_work={props.one_work}
                                DeleteArt={props.DeleteArt}
                                AddArtToCart={props.AddArtToCart}/>
}