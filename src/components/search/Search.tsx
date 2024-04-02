import {useRouter} from "next/navigation";

import search_icon from '@/assets/icons/search/search.svg'
import delete_icon from '@/assets/icons/search/delete.svg'

import default_avatar from '@/assets/default/default_ava_nav.svg'
import Image from "next/image";

import search_scss from '@/scss/components/search/Search.module.scss'
import nav_profile_scss from '@/scss/components/profile/Navigation.module.scss'
import {useState} from "react";

export const Search = () => {
    const router = useRouter()

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
                <ul>
                    <li className={search_scss.one_element}>
                        <Image src={default_avatar} className={search_scss.one_element_photo}
                               alt={'default_avatar'} width={0} height={0}/>
                        <div className={search_scss.one_element_name}>Кот1</div>
                    </li>
                    <li className={search_scss.one_element}>
                        <Image src={default_avatar} className={search_scss.one_element_photo}
                               alt={'default_avatar'} width={0} height={0}/>
                        <div className={search_scss.one_element_name}>Кот1</div>
                    </li>
                </ul>
            </main>
        </section>
    )
}