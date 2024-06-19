import support_scss from "@/scss/components/support/Support.module.scss";
import Image from "next/image";
import open_icon from "@/assets/icons/settings/open.svg";
import close_icon from "@/assets/icons/settings/close.svg";

export const Support = () => {
    return (
        <section className={support_scss.root}>
            <header className={support_scss.header}>
                Техническая поддержка
            </header>
            <section>
                <section>По возникшим вопросам обращаться на наш электронный адрес: <strong>gallery.lindero@yandex.ru</strong></section>
            </section>
        </section>
    )
}