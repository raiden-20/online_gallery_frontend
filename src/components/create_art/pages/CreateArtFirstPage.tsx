import create_art_scss from "@/scss/components/create_art/CreateArt.module.scss";
import Image from "next/image";
import next_icon from "@/assets/icons/create_art/next.svg";
import {ART_TYPES} from "@/paths/elements";

interface pageInterface {
    setPage(page: number): void
    setInput_type(type: string): void
}

export const CreateArtFirstPage = (props: pageInterface) => {
    const typeCategories = ['Картина', 'Фотография', 'Скульптура']

    return (
        <section className={create_art_scss.root}>
            <header className={create_art_scss.header}>Выберите тип товара:</header>
            <ul className={create_art_scss.ul}>
                {typeCategories.map((one: string, index) => {
                    return (
                        <li className={create_art_scss.grey_bgc}  key={index}
                            onClick={() => {
                                switch (index) {
                                    case 0: {
                                        props.setInput_type(ART_TYPES.PAINTING)
                                        break
                                    }
                                    case 1: {
                                        props.setInput_type(ART_TYPES.PHOTO)
                                        break
                                    }
                                    case 2: {
                                        props.setInput_type(ART_TYPES.SCULPTURE)
                                        break
                                    }
                                }
                                props.setPage(2)
                            }}>
                            <section className={create_art_scss.type_section}>
                                <div>{one}</div>
                                <button>
                                    <Image src={next_icon} alt={'next_icon'}/>
                                </button>
                            </section>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}