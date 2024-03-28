import {WorksProfileComponent} from "@/app/components/profile/profile_elemets/works/WorksProfileComponent";
import {
    ArtistNavigationProfileComponent
} from "@/app/components/profile/profile_elemets/navigation/ArtistNavigationProfileComponent";
import {HeaderProfileComponent} from "@/app/components/profile/header/HeaderProfileComponent";
// import {
//     CustomerNavigationProfileComponent
// } from "@/app/components/profile/profile_elemets/navigation/CustomerNavigationProfileComponent";

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