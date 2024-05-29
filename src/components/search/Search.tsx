import search_icon from '@/assets/icons/search/search.svg'
import delete_icon from '@/assets/icons/search/delete.svg'

import Image from "next/image";

import search_scss from '@/scss/components/search/Search.module.scss'
import nav_profile_scss from '@/scss/components/profile/Navigation.module.scss'
import {useState} from "react";
import {Artists} from "@/components/search/elements/Artists";
import {Customers} from "@/components/search/elements/Customers";
import {Works} from "@/components/search/elements/Works";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {Auctions} from "@/components/search/elements/Auctions";

export interface SearchInterface {
    search: [],

    getSmthByName(input_name: string, type: string): void,
    getAllArtists(): void
    getAllCustomers(): void
    getAllArts(type: string, router: AppRouterInstance): void
    GetAuctionsCategories(router: AppRouterInstance): void
}

export const Search = (props: SearchInterface) => {
    const categories = ['Художники', 'Покупатели', 'Картины', 'Фотографии', 'Скульптуры', 'Аукционы', 'События']

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
            <section className={search_scss.root_main}>
                <nav>
                    <ul className={nav_profile_scss.root + ' ' + search_scss.nav + ' scrollbarNone'}>
                        {categories.map((one: string, index) => {
                            return (
                                <li key={index}
                                    className={whoIsClicked === index + 1 ? nav_profile_scss.active : undefined}>
                                    <button onClick={() => setWhoIsClicked(index + 1)}>
                                        {one}
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                <main className={search_scss.main}>
                    {whoIsClicked === 1
                        ? <Artists search={props.search}
                                   input_name={input_name}
                                   getAllArtists={props.getAllArtists}
                                   getSmthByName={props.getSmthByName}/> :
                        whoIsClicked === 2
                            ? <Customers search={props.search}
                                         input_name={input_name}
                                         getAllCustomers={props.getAllCustomers}
                                         getSmthByName={props.getSmthByName}/> :
                            whoIsClicked === 3 || whoIsClicked === 4 || whoIsClicked === 5
                                ? <Works search={props.search}
                                         input_name={input_name}
                                         getAllArts={props.getAllArts}
                                         getSmthByName={props.getSmthByName}
                                         whoIsClicked={whoIsClicked}/> :
                                whoIsClicked === 6
                                    ? <Auctions search={props.search}
                                                input_name={input_name}
                                                getAllAuctions={props.GetAuctionsCategories}
                                                getSmthByName={props.getSmthByName}
                                                whoIsClicked={whoIsClicked}/> : null}
                </main>
            </section>

        </section>
    )
}