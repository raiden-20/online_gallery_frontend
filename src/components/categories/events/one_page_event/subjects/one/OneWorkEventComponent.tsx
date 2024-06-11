import {useRouter} from "next/navigation";
import {MAIN_PATHS} from "@/paths/main";
import works_profile_scss from "@/scss/components/profile/categories/WorksProfile.module.scss";
import {
    OneWorkCategoriesMainPhoto
} from "@/components/categories/works/works/one_work/category/elements/OneWorkCategoriesMainPhoto";
import {OneWorkWhoBuy} from "@/components/categories/works/works/one_work/category/elements/OneWorkWhoBuy";
import {OneWorkExclusive} from "@/components/categories/works/works/one_work/category/elements/OneWorkExclusive";
import {
    OneWorkCategoriesData
} from "@/components/categories/works/works/one_work/category/elements/OneWorkCategoriesData";
import {
    OneWorkCategoriesPrice
} from "@/components/categories/works/works/one_work/category/elements/OneWorkCategoriesPrice";
import {ArtShortInterface} from "@/interfaces/artInterface";
import {EventSubjectsInterface} from "@/interfaces/eventInterface";

interface oneWorkInterface {
    oneWork: EventSubjectsInterface
}

export const OneWorkEventComponent = (props: oneWorkInterface) => {
    const router = useRouter()

    const toOneArt = () => {
        router.push(MAIN_PATHS.ONE_ART + `/${props.oneWork.subjectId}`)
    }

    return (
        <section className={works_profile_scss.one_work}
                 onClick={toOneArt}>
            <section className={works_profile_scss.img_section}>
                <OneWorkCategoriesMainPhoto photoUrl={props.oneWork.photoUrl}/>
                <OneWorkWhoBuy customerId={props.oneWork.customerId}
                               avatarUrl={props.oneWork.customerUrl}
                               customerName={props.oneWork.customerName}/>
            </section>
            <OneWorkCategoriesData artistName={props.oneWork.artistName}
                                   name={props.oneWork.subjectName}/>
            <OneWorkCategoriesPrice price={props.oneWork.price}/>
        </section>
    )
}