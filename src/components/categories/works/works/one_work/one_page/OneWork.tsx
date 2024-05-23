import {OneWorkComponent} from "@/components/categories/works/works/one_work/one_page/OneWorkComponent";
import {ArtInterface} from "@/interfaces/artInterface";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {useEffect} from "react";
import {usePathname, useRouter} from "next/navigation";

interface oneWorkInterface {
    one_work: ArtInterface
    GetArt(artId: string, router: AppRouterInstance): void
    DeleteArt(artId: string, router: AppRouterInstance): void
    AddArtToCart(artId: string, router: AppRouterInstance): void
}

export const OneWork = (props: oneWorkInterface) => {

    const router = useRouter()

    const pathname = usePathname()
    const lastPath = pathname.split('/')[2]

    useEffect(() => {

        props.GetArt(lastPath, router)
    }, []);

    return <OneWorkComponent one_work={props.one_work}
                             DeleteArt={props.DeleteArt}
                             AddArtToCart={props.AddArtToCart}/>
}