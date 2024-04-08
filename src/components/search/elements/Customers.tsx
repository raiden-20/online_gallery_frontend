import search_scss from "@/scss/components/search/Search.module.scss";
import Image from "next/image";
import default_avatar from "@/assets/default/default_ava_nav.svg";
import {useRouter} from "next/navigation";
import {MAIN_PATHS} from "@/paths/main";
import {useEffect} from "react";

interface SearchCustomers {
    customerId: string,
    customerName: string,
    avatarUrl: string
}

interface CustomersInterface {
    artists: SearchCustomers[],
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

    return (
        <ul>
            {props.artists.map((oneElement:SearchCustomers) => {
                return (
                    <li className={search_scss.one_element}
                    onClick={() => router.push(MAIN_PATHS.PROFILE)}>
                        <Image loader={() => oneElement.avatarUrl}
                               src={oneElement.avatarUrl === '' ? default_avatar : oneElement.avatarUrl} className={search_scss.one_element_photo}
                               alt={'avatar'} width={0} height={0}/>
                        <div className={search_scss.one_element_name}>{oneElement.customerName}</div>
                    </li>
                )
            })}
        </ul>
    )
}