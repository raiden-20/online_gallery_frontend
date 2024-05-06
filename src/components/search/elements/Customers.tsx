import search_scss from "@/scss/components/search/Search.module.scss";
import {useRouter} from "next/navigation";
import {MAIN_PATHS, ROLES} from "@/paths/main";
import {useEffect} from "react";
import Cookies from "js-cookie";

interface SearchCustomers {
    customerId: string,
    customerName: string,
    avatarUrl: string
}

interface CustomersInterface {
    search: SearchCustomers[],
    input_name: string

    getAllCustomers(): void
    getSmthByName(input_name: string, type: string): void,
}

export const Customers = (props: CustomersInterface) => {
    const router = useRouter()

    useEffect(() => {
        if (props.input_name === '') {
            props.getAllCustomers()
        }else {
            props.getSmthByName(props.input_name, 'customer')
        }
    }, [props.input_name]);

    useEffect(() => {
        props.getAllCustomers()
    }, []);

    return (
        <ul>
            {props.search.map((oneElement:SearchCustomers, index) => {
                return (
                    <li className={search_scss.one_element} key={index}
                    onClick={() => {
                        router.push(MAIN_PATHS.PROFILE_CUSTOMER + '/' + oneElement.customerId)
                        Cookies.set("currentRole", ROLES.CUSTOMER)
                        Cookies.set("currentId", oneElement.customerId)
                        if (Cookies.get('customerId') === oneElement.customerId) {
                            Cookies.set("role", ROLES.CUSTOMER)
                        }
                    }}>
                        <img src={oneElement.avatarUrl === '' ? '/default_avatar_profile.svg' : oneElement.avatarUrl} className={search_scss.one_element_photo}
                             alt={'avatar'} crossOrigin="anonymous"/>
                        <div className={search_scss.one_element_name}>{oneElement.customerName}</div>
                    </li>
                )
            })}
        </ul>
    )
}