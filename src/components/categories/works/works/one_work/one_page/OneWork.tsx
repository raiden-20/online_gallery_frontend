import {OneWorkComponent} from "@/components/categories/works/works/one_work/one_page/OneWorkComponent";
import {ArtInterface} from "@/interfaces/artInterface";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {useEffect} from "react";
import {usePathname, useRouter} from "next/navigation";
import Cookies from "js-cookie";
import {ROLES} from "@/paths/main";

interface oneWorkInterface {
    one_work: ArtInterface
    GetArt(artId: string, currentId: string, router: AppRouterInstance): void
    DeleteArt(artId: string, router: AppRouterInstance): void
    AddArtToCart(artId: string, router: AppRouterInstance): void
    DeleteArtByAdmin(artId: string, router: AppRouterInstance): void
}

export const OneWork = (props: oneWorkInterface) => {

    const router = useRouter()

    const pathname = usePathname()
    const lastPath = pathname.split('/')[2]

    useEffect(() => {
        if (Cookies.get('role') === ROLES.ARTIST) {
            props.GetArt(lastPath, Cookies.get('artistId') as string, router)
        } else if (Cookies.get('role') === ROLES.CUSTOMER) {
            props.GetArt(lastPath, Cookies.get('customerId') as string, router)
        }

    }, []);

    return <OneWorkComponent one_work={props.one_work}
                             DeleteArt={props.DeleteArt}
                             AddArtToCart={props.AddArtToCart}
                             DeleteArtByAdmin={props.DeleteArtByAdmin}/>
}