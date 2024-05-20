import {ArtShortInterface} from "@/interfaces/artInterface";
import {WorksComponent} from "@/components/categories/works/works/WorksComponent";
import {Filters, SizeInterface} from "@/interfaces/filters";

interface workInterface {
    //currentFilters: Filters
    arts: ArtShortInterface[]
}

export const WorksArts = (props: workInterface) => {

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