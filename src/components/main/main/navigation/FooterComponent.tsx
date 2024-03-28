import footer_scss from '@/scss/components/main/navigation/Footer.module.scss'
import Image from "next/image";

import github_icon from '@/assets/icons/nav/github.svg'

export const FooterComponent = () => {
    return (
        <section className={footer_scss.root}>
            <ul className={footer_scss.nav}>
                <li>
                    Copyright © 2024 Lindéro
                </li>
                <li>
                    <a>
                        Информация
                    </a>
                </li>
                <li>
                    <a>
                        Техническая поддержка
                    </a>
                </li>
            </ul>
            <section>
                <a>
                    <Image src={github_icon} className={footer_scss.github_image}
                           alt={'github_icon'} width={0} height={0}/>
                </a>
            </section>
        </section>
    )
}