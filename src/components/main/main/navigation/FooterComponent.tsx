import footer_scss from '@/scss/components/main/navigation/Footer.module.scss'
import Image from "next/image";

import github_icon from '@/assets/icons/nav/github.svg'

interface footerLinksInterface {
    title: string
    link: string,
}

export const FooterComponent = () => {
    const footer_links: footerLinksInterface[] = [
        {title: 'Copyright © 2024 Lindéro', link: ''},
        {title: 'Информация', link: ''},
        {title: 'Техническая поддержка', link: ''}
    ]

    return (
        <section className={footer_scss.root}>
            <ul className={footer_scss.nav}>
                {footer_links.map((oneLink: footerLinksInterface, index) => {
                    return (
                        <li className={index === 0 ? footer_scss.first : undefined} key={index}>
                            <a className={footer_scss.oneLink}>{oneLink.title}</a>
                        </li>
                    )
                })}
            </ul>
            <section className={footer_scss.github_section}>
                <a>
                    <Image src={github_icon} className={footer_scss.github_image}
                           alt={'github_icon'} width={0} height={0}/>
                </a>
            </section>
        </section>
    )
}