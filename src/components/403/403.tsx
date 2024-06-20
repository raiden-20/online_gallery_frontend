import error_403_scss from '@/scss/components/errors/403.module.scss'
import forbidden_icon from '@/assets/icons/errors/forbidden.svg'
import Image from "next/image";
import {useRouter} from "next/navigation";
import {MAIN_PATHS} from "@/paths/main";

export const Error403Page = () => {
    const router = useRouter()

    return (
        <section className={error_403_scss.page}>
            <main className={error_403_scss.root}>
                <Image src={forbidden_icon} alt={'forbidden_icon'} width={0} height={0}/>
                <section className={error_403_scss.text}>Похоже у Вас нет доступа к этой странице, хотите <button className={error_403_scss.button} onClick={() => router.push(MAIN_PATHS.MAIN)}>вернуться на главную страницу</button>?</section>
            </main>

        </section>
    )
}