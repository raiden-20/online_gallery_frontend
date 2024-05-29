import create_art_scss from "@/scss/components/create_art/CreateArt.module.scss";
import Image from "next/image";
import next_icon from "@/assets/icons/create_art/next.svg";

interface pageInterface {
    setPage(page: number): void
}

export const CreateArtSecondPage = (props: pageInterface) => {
    return (
        <section className={create_art_scss.root}>
            <header className={create_art_scss.header}>Выберите способ продажи:</header>
            <section className={create_art_scss.ul}>
                <section className={create_art_scss.grey_bgc}
                    onClick={() => props.setPage(3)}>
                    <section className={create_art_scss.type_section}>
                        <div>Фиксированная цена</div>
                        <button>
                            <Image src={next_icon} alt={'next_icon'}/>
                        </button>
                    </section>
                </section>
                <section className={create_art_scss.grey_bgc}
                         onClick={() => props.setPage(4)}>
                    <section className={create_art_scss.type_section}>
                        <div>Аукцион</div>
                        <button>
                            <Image src={next_icon} alt={'next_icon'}/>
                        </button>
                    </section>
                </section>
            </section>
        </section>
    )
}