import works_profile_scss from '@/scss/components/profile/categories/WorksProfile.module.scss'
import {
    OneWorkProfileComponent
} from "@/components/profile/profile_elemets/categories/works/OneWorkProfileComponent";

export const WorksComponent = () => {

    return (
        <ul className={works_profile_scss.root}>
            <li>
                <OneWorkProfileComponent/>
            </li>
            <li>
                <OneWorkProfileComponent/>
            </li>
            <li>
                <OneWorkProfileComponent/>
            </li>
            <li>
                <OneWorkProfileComponent/>
            </li>
            <li>
                <OneWorkProfileComponent/>
            </li>
            <li>
                <OneWorkProfileComponent/>
            </li>
            <li>
                <OneWorkProfileComponent/>
            </li>
        </ul>
    )
}