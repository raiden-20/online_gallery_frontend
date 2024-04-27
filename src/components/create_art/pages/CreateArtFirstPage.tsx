import create_art_scss from "@/scss/components/create_art/CreateArt.module.scss";
import Image from "next/image";
import next_icon from "@/assets/icons/create_art/next.svg";

interface pageInterface {
    setPage(page: number): void
}

export const CreateArtFirstPage = (props: pageInterface) => {
    return (
        <section className={create_art_scss.root}>
            <header className={create_art_scss.header}>Выберите тип товара:</header>
            <ul className={create_art_scss.ul}>
                <li className={create_art_scss.grey_bgc}
                    onClick={() => props.setPage(2)}>
                    <section className={create_art_scss.type_section}>
                        <div>Картина</div>
                        <button>
                            <Image src={next_icon} alt={'next_icon'}/>
                        </button>
                    </section>
                </li>
                <li className={create_art_scss.grey_bgc}
                    onClick={() => props.setPage(2)}>
                    <section className={create_art_scss.type_section}>
                        <div>Фотография</div>
                        <button>
                            <Image src={next_icon} alt={'next_icon'}/>
                        </button>
                    </section>
                </li>
                <li className={create_art_scss.grey_bgc}
                    onClick={() => props.setPage(2)}>
                    <section className={create_art_scss.type_section}>
                        <div>Скульптура</div>
                        <button>
                            <Image src={next_icon} alt={'next_icon'}/>
                        </button>
                    </section>
                </li>
            </ul>
        </section>
    )
}