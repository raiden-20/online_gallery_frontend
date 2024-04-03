import {ArtistProfileContainer} from "@/components/profile/containers/ArtistProfileContainer";
import Cookies from "js-cookie";
import {ROLES} from "@/paths/main";
import {CustomerProfileContainer} from "@/components/profile/containers/CustomerProfileContainer";

export const ProfileRoot = () => {
    if (Cookies.get('role') === ROLES.ARTIST) {
        return <ArtistProfileContainer/>
    } else {
        return <CustomerProfileContainer/>
    }

}