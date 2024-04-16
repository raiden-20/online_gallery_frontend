import {useState} from "react";
import {WorksComponent} from "@/components/profile/profile_elemets/categories/works/WorksComponent";
import {AboutArtistComponent} from "@/components/profile/profile_elemets/categories/artist/about/AboutArtistComponent";
import {
    CustomerNavigationProfileComponent
} from "@/components/profile/profile_elemets/navigation/CustomerNavigationProfileComponent";
import {AboutCustomer} from "@/components/profile/profile_elemets/categories/customer/about/AboutCustomer";

interface customerCategoriesInterface {
    input_description: string
    setInput_description(input_description: string): void
}

export const CustomerCategoriesProfile = (props: customerCategoriesInterface) => {
    const [whoIsClicked, setWhoIsClicked] = useState(1)

    return (
        <section>
            <CustomerNavigationProfileComponent setWhoIsClicked={setWhoIsClicked} whoIsClicked={whoIsClicked}/>
            {whoIsClicked === 1 ? <WorksComponent/> :
            whoIsClicked === 2 ? <AboutCustomer input_description={props.input_description}
                                                setInput_description={props.setInput_description}/> : null}
        </section>
    )
}