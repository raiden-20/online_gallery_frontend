import works_profile_scss from "@/scss/components/profile/categories/WorksProfile.module.scss";
import {MAIN_PATHS, PATHS_CATEGORY} from "@/paths/main";
import {usePathname, useRouter} from "next/navigation";

export const OneWorkProfileComponent = () => {
    const router = useRouter()
    const pathname = usePathname()

    const toOneArt = () => {

        switch (pathname) {
            case PATHS_CATEGORY.PHOTO : {
                router.push(MAIN_PATHS.ONE_PHOTO)
                break
            }
            case PATHS_CATEGORY.PAINTINGS : {
                router.push(MAIN_PATHS.ONE_PAINTING)
                break
            }
            case PATHS_CATEGORY.SCULPTURES : {
                router.push(MAIN_PATHS.ONE_SCULPTURE)
                break
            }
        }
    }
    return (
        <section className={works_profile_scss.one_work}
                 onClick={toOneArt}>
            <img src={'/default_work_profile.jpg'} className={works_profile_scss.one_work_img}
                 alt={'one work'}/>
            <section className={works_profile_scss.one_work_names}>
                <div className={works_profile_scss.one_work_weight}>Имя</div>
                <div>Название</div>
            </section>
            <div className={works_profile_scss.one_work_weight}>100000 ₽</div>
        </section>
    )
}