import works_profile_scss from "@/scss/components/profile/categories/WorksProfile.module.scss";
import {ArtShortInterface} from "@/interfaces/artInterface";
import {OneWorkCategoriesComponent} from "@/components/categories/works/works/one_work/OneWorkCategoriesComponent";
interface workInterface {
    arts: ArtShortInterface[]
}

export const WorksComponent = (props: workInterface) => {
    return (
        <ul className={works_profile_scss.root}>
            {props.arts.map((oneArt: ArtShortInterface) => {
                return (
                    <li>
                        <OneWorkCategoriesComponent oneArt={oneArt}/>
                    </li>
                )
            })}
        </ul>
    )
}