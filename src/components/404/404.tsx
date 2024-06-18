import {useRouter} from "next/navigation";
import error_403_scss from "@/scss/components/errors/403.module.scss";
import Image from "next/image";
import error_icon from "@/assets/icons/errors/404_icon.svg";
import {MAIN_PATHS} from "@/paths/main";

export const Error404Page = () => {
    const router = useRouter()

    return (
        <section className={error_403_scss.page}>
            <main className={error_403_scss.root}>
                <header className={error_403_scss.header_404}>404</header>
                <section className={error_403_scss.text}>Похоже Вы потерялись, хотите <button
                    className={error_403_scss.button} onClick={() => router.push(MAIN_PATHS.MAIN)}>вернуться на главную
                    страницу</button>?
                </section>
                <Image src={error_icon} alt={'forbidden_icon'} width={0} height={0}/>
            </main>

        </section>
    )
}