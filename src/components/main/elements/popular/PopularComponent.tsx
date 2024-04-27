import Image from "next/image";
import prev_icon from "@/assets/icons/main/prev.svg";
import next_icon from "@/assets/icons/main/next.svg";

export const PopularComponent = () => {
    return (
        <section>
            <section>
                <button className={'button_main_page'}
                        onClick={() => {
                            if (indexBanner > 0) setIndexBanner(indexBanner - 1)
                        }}>
                    <Image src={prev_icon} alt={'prev_icon'} width={0} height={0}/>
                </button>
                <header>Популярное</header>
                <button className={'button_main_page'}
                        onClick={() => {
                            if (indexBanner < banners.length - 1) setIndexBanner(indexBanner + 1)
                        }}>
                    <Image src={next_icon} alt={'next_icon'} width={0} height={0}/>
                </button>
            </section>
        </section>
    )
}