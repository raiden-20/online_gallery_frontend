import works_profile_scss from "@/scss/components/profile/categories/WorksProfile.module.scss";
import {ArtCustomerInterface} from "@/interfaces/artInterface";
import {
    OneWorkCustomerComponent
} from "@/components/profile/profile_elemets/categories/customer/customer_works/OneWorkCustomerComponent";
interface workInterface {
    arts: ArtCustomerInterface[]

    customerName: string
    avatarUrl: string
}

export const WorksCustomerComponent = (props: workInterface) => {
    return (
        <ul className={works_profile_scss.root}>
            {props.arts.map((oneArt: ArtCustomerInterface) => {
                return (
                    <li>
                        <OneWorkCustomerComponent oneArt={oneArt} avatarUrl={props.avatarUrl} customerName={props.customerName}/>
                    </li>
                )
            })}
        </ul>
    )
}