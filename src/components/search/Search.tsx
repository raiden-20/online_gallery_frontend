import {useRouter} from "next/navigation";

import search_icon from '@/assets/icons/search/search.svg'
import delete_icon from '@/assets/icons/search/delete.svg'

import Image from "next/image";

import search_scss from '@/scss/components/search/Search.module.scss'
import nav_profile_scss from '@/scss/components/profile/Navigation.module.scss'
import {useState} from "react";
import {Artists} from "@/components/search/elements/Artists";
import {Customers} from "@/components/search/elements/Customers";

export interface SearchInterface {
    artists: [],
    getSmthByName(input_name: string, type: string): void,
    getAllArtists(): void
    getAllCustomers(): void
}

export const Search = (props: SearchInterface) => {

    const [whoIsClicked, setWhoIsClicked] = useState(1)
    const [input_name, setInput_name] = useState('')

    return (
        <section className={search_scss.root}>
            <section className={search_scss.header}>
                <Image src={search_icon} className={search_scss.img}
                       alt={'search_icon'} width={0} height={0}/>
                <input value={input_name} onChange={(event) => setInput_name(event.target.value)}
                       className={search_scss.input} placeholder={'Поиск'}/>
                <button>
                    <Image src={delete_icon} className={search_scss.img}
                           onClick={() => setInput_name('')}
                           alt={'search_icon'} width={0} height={0}/>
                </button>
            </section>
            <nav>
                <ul className={nav_profile_scss.root + ' ' + search_scss.nav}>
                    <li className={whoIsClicked === 1 ? nav_profile_scss.active : undefined}>
                        <button onClick={() => setWhoIsClicked(1)}>
                            Художники
                        </button>
                    </li>
                    <li className={whoIsClicked === 2 ? nav_profile_scss.active : undefined}>
                        <button onClick={() => setWhoIsClicked(2)}>
                            Покупатели
                        </button>
                    </li>
                    <li className={whoIsClicked === 3 ? nav_profile_scss.active : undefined}>
                        <button onClick={() => setWhoIsClicked(3)}>
                            Картины
                        </button>
                    </li>
                    <li className={whoIsClicked === 4 ? nav_profile_scss.active : undefined}>
                        <button onClick={() => setWhoIsClicked(4)}>
                            Фотографии
                        </button>
                    </li>
                    <li className={whoIsClicked === 5 ? nav_profile_scss.active : undefined}>
                        <button onClick={() => setWhoIsClicked(5)}>
                            Скульптуры
                        </button>
                    </li>
                    <li className={whoIsClicked === 6 ? nav_profile_scss.active : undefined}>
                        <button onClick={() => setWhoIsClicked(6)}>
                            Аукционы
                        </button>
                    </li>
                    <li className={whoIsClicked === 7 ? nav_profile_scss.active : undefined}>
                        <button onClick={() => setWhoIsClicked(7)}>
                            События
                        </button>
                    </li>
                </ul>
            </nav>
            <main>
                {whoIsClicked === 1 ? <Artists artists={props.artists}
                                               input_name={input_name}
                                               getAllArtists={props.getAllArtists}
                                               getSmthByName={props.getSmthByName}/> :
                    whoIsClicked === 2 ? <Customers artists={props.artists}
                                                    input_name={input_name}
                                                    getAllCustomers={props.getAllCustomers}
                                                    getSmthByName={props.getSmthByName}/> : null}
            </main>
        </section>
    )
}