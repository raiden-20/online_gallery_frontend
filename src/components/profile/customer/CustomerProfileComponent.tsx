import {HeaderProfileComponent} from "@/components/profile/header/HeaderProfileComponent";
import {WorksProfileComponent} from "@/components/profile/profile_elemets/works/WorksProfileComponent";
import {
    CustomerNavigationProfileComponent
} from "@/components/profile/profile_elemets/navigation/CustomerNavigationProfileComponent";

export const CustomerProfileComponent = () => {
    return (
        <section>
            <HeaderProfileComponent/>
            <main>
                <CustomerNavigationProfileComponent/>
                <WorksProfileComponent/>
            </main>
        </section>
    )
}