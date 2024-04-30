import works_profile_scss from "@/scss/components/profile/categories/WorksProfile.module.scss";
import {ArtCustomerInterface} from "@/interfaces/artInterface";
import {
    OneWorkCustomerComponent
} from "@/components/profile/profile_elemets/categories/customer/customer_works/OneWorkCustomerComponent";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import {useRouter} from "next/navigation";
interface workInterface {
    arts_customer: ArtCustomerInterface[]
    GetArtsCustomer(customerId: string, router: AppRouterInstance): void
}

export const WorksCustomerComponent = (props: workInterface) => {
    const router = useRouter()

    const [currentId] = useState(Cookies.get('currentId') as string)

    useEffect(() => {
        props.GetArtsCustomer(currentId, router)
    }, []);

    return (
        <ul className={works_profile_scss.root}>
            {props.arts_customer.map((oneArt: ArtCustomerInterface, index) => {
                return (
                    <li key={index}>
                        <OneWorkCustomerComponent oneArt={oneArt}/>
                    </li>
                )
            })}
        </ul>
    )
}