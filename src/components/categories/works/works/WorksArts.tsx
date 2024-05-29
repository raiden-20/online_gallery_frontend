import {ArtShortInterface} from "@/interfaces/artInterface";
import {WorksComponent} from "@/components/categories/works/works/WorksComponent";
import {Filters, SizeInterface} from "@/interfaces/filters";
import {useEffect} from "react";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {usePathname, useRouter} from "next/navigation";

interface workInterface {
    //currentFilters: Filters
    arts: ArtShortInterface[]
    GetArtsCategories(type: string, router: AppRouterInstance): void
}

export const WorksArts = (props: workInterface) => {
    const router = useRouter()

    const pathname = usePathname().split('/')
    const lastPath = pathname[pathname.length - 1]


    useEffect(() => {
        props.GetArtsCategories(lastPath, router)
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
    return <WorksComponent arts={props.arts}/>
}