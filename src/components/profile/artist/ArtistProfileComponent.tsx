// import {
//     CustomerNavigationProfileComponent
// } from "@/app/components/profile/profile_elemets/navigation/CustomerNavigationProfileComponent";

import {HeaderProfileComponent} from "@/components/profile/header/HeaderProfileComponent";
import {
    ArtistNavigationProfileComponent
} from "@/components/profile/profile_elemets/navigation/ArtistNavigationProfileComponent";
import {WorksProfileComponent} from "@/components/profile/profile_elemets/works/WorksProfileComponent";

export const ArtistProfileComponent = () => {
    return (
        <section>
            <HeaderProfileComponent/>
            <main>
                <ArtistNavigationProfileComponent/>
                <WorksProfileComponent/>
            </main>
        </section>
    )
}