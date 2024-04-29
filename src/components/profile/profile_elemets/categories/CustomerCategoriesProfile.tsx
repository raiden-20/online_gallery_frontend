import {useState} from "react";
import {
    CustomerNavigationProfileComponent
} from "@/components/profile/profile_elemets/navigation/CustomerNavigationProfileComponent";
import {AboutCustomer} from "@/components/profile/profile_elemets/categories/customer/about/AboutCustomer";
import {
    CustomerWorksContainer
} from "@/components/profile/profile_elemets/categories/customer/customer_works/CustomerWorksContainer";

interface customerCategoriesInterface {
    input_description: string
    setInput_description(input_description: string): void
    setIsNeedChangeData(flag: boolean): void

    isEditMobile : boolean
    setIsEditMobile(flag: boolean): void
}

export const CustomerCategoriesProfile = (props: customerCategoriesInterface) => {
    const [whoIsClicked, setWhoIsClicked] = useState(1)

    return (
        <section>
            <CustomerNavigationProfileComponent setWhoIsClicked={setWhoIsClicked} whoIsClicked={whoIsClicked}/>
            {whoIsClicked === 1 ? <CustomerWorksContainer/> :
            whoIsClicked === 2 ? <AboutCustomer input_description={props.input_description}
                                                setInput_description={props.setInput_description}
                                                setIsNeedChangeData={props.setIsNeedChangeData}
                                                isEditMobile={props.isEditMobile}
                                                setIsEditMobile={props.setIsEditMobile}/> : null}
        </section>
    )
}