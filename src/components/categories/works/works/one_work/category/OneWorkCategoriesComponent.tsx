import works_profile_scss from "@/scss/components/profile/categories/WorksProfile.module.scss";
import {MAIN_PATHS} from "@/paths/main";
import {useRouter} from "next/navigation";
import {ArtShortInterface} from "@/interfaces/artInterface";
import {OneWorkCategoriesMainPhoto} from "@/components/categories/works/works/one_work/category/elements/OneWorkCategoriesMainPhoto";
import {OneWorkWhoBuy} from "@/components/categories/works/works/one_work/category/elements/OneWorkWhoBuy";
import {OneWorkExclusive} from "@/components/categories/works/works/one_work/category/elements/OneWorkExclusive";
import {OneWorkCategoriesData} from "@/components/categories/works/works/one_work/category/elements/OneWorkCategoriesData";
import {OneWorkCategoriesPrice} from "@/components/categories/works/works/one_work/category/elements/OneWorkCategoriesPrice";

interface oneWorkInterface {
    oneArt: ArtShortInterface
}

export const OneWorkCategoriesComponent = (props: oneWorkInterface) => {

    const router = useRouter()

    const toOneArt = () => {
        router.push(MAIN_PATHS.ONE_ART + `/${props.oneArt.artId}`)
    }

    return (
        <section className={works_profile_scss.one_work}
                 onClick={toOneArt}>
            <section className={works_profile_scss.img_section}>
                <OneWorkCategoriesMainPhoto photoUrl={props.oneArt.photoUrl}/>
                <OneWorkWhoBuy customerId={props.oneArt.customerId}
                               avatarUrl={props.oneArt.avatarUrl}
                               customerName={props.oneArt.customerName}/>
                <OneWorkExclusive isPrivate={props.oneArt.isPrivate}
                                  customerId={props.oneArt.customerId}/>
            </section>
            <OneWorkCategoriesData artistName={props.oneArt.artistName}
                                   name={props.oneArt.name}/>
            <OneWorkCategoriesPrice price={props.oneArt.price}/>
        </section>
    )
}