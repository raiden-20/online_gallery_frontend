import footer_scss from '@/scss/components/main/navigation/Footer.module.scss'
import Image from "next/image";

import github_icon from '@/assets/icons/nav/github.svg'
import {MAIN_PATHS} from "@/paths/main";

interface footerLinksInterface {
    title: string
    link: string,
}

export const FooterComponent = () => {
    const footer_links: footerLinksInterface[] = [
        {title: 'Copyright © 2024 Lindéro', link: ''},
        {title: 'Информация', link: MAIN_PATHS.INFORMATION},
        {title: 'Техническая поддержка', link: MAIN_PATHS.SUPPORT}
    ]

    return (
        <section className={footer_scss.root}>
            <ul className={footer_scss.nav}>
                {footer_links.map((oneLink: footerLinksInterface, index) => {
                    return (
                        <li className={index === 0 ? footer_scss.first : undefined} key={index}>
                            {oneLink.link !== '' ?
                                <a className={footer_scss.oneLink} href={oneLink.link}>{oneLink.title}</a>
                                :
                                <a>{oneLink.title}</a>
                            }

                        </li>
                    )
                })}
            </ul>
            <section className={footer_scss.github_section}>
                <a href={process.env.GITHUB} target="_blank">
                    <Image src={github_icon} className={footer_scss.github_image}
                           alt={'github_icon'} width={0} height={0}/>
                </a>
            </section>
        </section>
    )
}