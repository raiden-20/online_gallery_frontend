import {useRouter} from "next/navigation";
import Image from "next/image";

import artists_scss from '@/scss/components/categories/Artists.module.scss'

import default_ava from '@/assets/default/default_ava_nav.svg'

export const Artists = () => {
    const router = useRouter()

    return (
        <section className={artists_scss.root}>
            <header className={artists_scss.header}>
                <div className={artists_scss.page_title}>Художники</div>
                <section className={artists_scss.sort_section}>
                    <div>Сортировать по:</div>
                    <select className={artists_scss.select}>
                        <option value="popular">популярности</option>
                        <option value="alphabet">алфавиту</option>
                    </select>
                </section>
            </header>
            <main>
                <ul className={artists_scss.users}>
                    <li className={artists_scss.one_user}>
                        <Image src={default_ava} className={artists_scss.one_user_avatar}
                               alt={'default_ava'} width={0} height={0}/>
                        <div className={artists_scss.one_user_name}>Имя</div>
                    </li>
                    <li className={artists_scss.one_user}>
                        <Image src={default_ava} className={artists_scss.one_user_avatar}
                               alt={'default_ava'} width={0} height={0}/>
                        <div className={artists_scss.one_user_name}>Имя</div>
                    </li>

                </ul>
            </main>
        </section>
    )
}