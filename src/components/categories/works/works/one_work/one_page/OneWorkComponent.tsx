import one_work_scss from '@/scss/components/profile/categories/OneWork.module.scss'
import {OneWorkData} from "@/components/categories/works/works/one_work/one_page/element/OneWorkData";
import {OneWorkButton} from "@/components/categories/works/works/one_work/one_page/element/OneWorkButton";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {ArtInterface} from "@/interfaces/artInterface";
import {OneWorkPhoto} from "@/components/categories/works/works/one_work/one_page/element/OneWorkPhoto";
import {OneWorkHeader} from "@/components/categories/works/works/one_work/one_page/element/OneWorkHeader";
import {OneWorkFooter} from "@/components/categories/works/works/one_work/one_page/element/OneWorkFooter";
import {MAIN_PATHS} from "@/paths/main";

interface oneWorkInterface {
    one_work: ArtInterface
    DeleteArt(artId: string, router: AppRouterInstance): void
    AddArtToCart(artId: string, router: AppRouterInstance): void
}

export const OneWorkComponent = (props: oneWorkInterface) => {

    return (
        <section className={one_work_scss.root}>
            <OneWorkPhoto photoUrls={props.one_work.photoUrls}/>
            <main className={one_work_scss.art_info}>
                <OneWorkHeader artistName={props.one_work.artistName}
                               name={props.one_work.name}
                               createDate={props.one_work.createDate}/>
                <section className={one_work_scss.art_price}>
                    {props.one_work.price} ₽
                </section>
                <OneWorkButton status={props.one_work.status}
                               artistId={props.one_work.artistId}
                               AddArtToCart={props.AddArtToCart}
                               artId={props.one_work.artId}/>
                <OneWorkData type={props.one_work.type} materials={props.one_work.materials}
                             tags={props.one_work.tags} size={props.one_work.size}
                             frame={props.one_work.frame} customerId={props.one_work.customerId}
                             customerName={props.one_work.customerName} description={props.one_work.description}/>
                <OneWorkFooter artistId={props.one_work.artistId}
                               artId={props.one_work.artId}
                               customerId={props.one_work.customerId}
                               DeleteArt={props.DeleteArt}
                               status={props.one_work.status}
                               path={MAIN_PATHS.EDIT_ART}/>
            </main>
        </section>
    )
}