import {ArtistProfileContainer} from "@/components/profile/containers/ArtistProfileContainer";
import Cookies from "js-cookie";
import {ROLES} from "@/paths/main";
import {CustomerProfileContainer} from "@/components/profile/containers/CustomerProfileContainer";
import {useEffect, useState} from "react";

export const ProfileRoot = () => {
    const [currentRole, setCurrentRole] = useState('')

    useEffect(() => {
        setCurrentRole(Cookies.get('currentRole') as string)
    }, []);

    if (currentRole === ROLES.ARTIST) {
        return <ArtistProfileContainer/>
    } else if (currentRole === ROLES.CUSTOMER) {
        return <CustomerProfileContainer/>
    }
}