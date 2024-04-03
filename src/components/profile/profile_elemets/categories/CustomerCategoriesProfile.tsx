import {useState} from "react";
import {WorksProfileComponent} from "@/components/profile/profile_elemets/categories/works/WorksProfileComponent";
import {About} from "@/components/profile/profile_elemets/categories/artist/about/About";
import {
    CustomerNavigationProfileComponent
} from "@/components/profile/profile_elemets/navigation/CustomerNavigationProfileComponent";

export const CustomerCategoriesProfile = () => {
    const [whoIsClicked, setWhoIsClicked] = useState(1)

    return (
        <section>
            <CustomerNavigationProfileComponent setWhoIsClicked={setWhoIsClicked} whoIsClicked={whoIsClicked}/>
            {whoIsClicked === 1 ? <WorksProfileComponent/> : null}
        </section>
    )
}