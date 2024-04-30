import works_profile_scss from '@/scss/components/profile/categories/WorksProfile.module.scss'
import {ArtShortInterface} from "@/interfaces/artInterface";
import {OneWorkCategoriesComponent} from "@/components/categories/works/works/one_work/OneWorkCategoriesComponent";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {useEffect} from "react";
import {useRouter} from "next/navigation";

interface workInterface {
    category: string
    arts: ArtShortInterface[]
    GetArtsCategories(type: string, router: AppRouterInstance): void
}

export const WorksComponent = (props: workInterface) => {
    const router = useRouter()

    useEffect(() => {
        props.GetArtsCategories(props.category.toLowerCase(), router)
    }, []);

    return (
        <ul className={works_profile_scss.root}>
            {props.arts.map((oneArt: ArtShortInterface, index) => {
                return (
                    <li key={index}>
                        <OneWorkCategoriesComponent oneArt={oneArt}/>
                    </li>
                )
            })}
        </ul>
    )
}