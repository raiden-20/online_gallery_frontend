import {ArtistProfileContainer} from "@/components/profile/containers/ArtistProfileContainer";
import Cookies from "js-cookie";
import {ROLES} from "@/paths/main";
import {CustomerProfileContainer} from "@/components/profile/containers/CustomerProfileContainer";
import {useEffect, useState} from "react";
import {usePathname} from "next/navigation";

export const ProfileRoot = () => {
    const pathnameRole = usePathname().split('/')[2]
    const [currentRole, setCurrentRole] = useState('')

    useEffect(() => {
        Cookies.set('currentRole', pathnameRole)
        setCurrentRole(pathnameRole)
    }, []);

    if (currentRole === ROLES.ARTIST) {
        return <ArtistProfileContainer/>
    } else if (currentRole === ROLES.CUSTOMER) {
        return <CustomerProfileContainer/>
    }
}