import one_work_scss from "@/scss/components/profile/categories/OneWork.module.scss";
import {ArtInterface} from "@/interfaces/artInterface";
import {useRouter} from "next/navigation";
import Cookies from "js-cookie";
import {MAIN_PATHS, ROLES} from "@/paths/main";

interface oneWorkDataInterface {
    one_work: ArtInterface
}

export const OneWorkData = (props: oneWorkDataInterface) => {
    const router = useRouter()

    return (
        <section className={one_work_scss.art_info}>
            <section className={one_work_scss.art_table}>
                <section className={one_work_scss.details_section}>
                    <div className={one_work_scss.more_info_noimp}>Тип</div>
                    <div className={one_work_scss.more_info_noimp_text}>{props.one_work.type}</div>
                </section>
                <section className={one_work_scss.details_section}>
                    <div className={one_work_scss.more_info_noimp}>Материал</div>
                    <ul className={one_work_scss.materials_ul}>
                        {props.one_work.materials.map((oneMaterial: string, index) => {
                            return (
                                <li className={one_work_scss.more_info_noimp_text} key={index}>{' '}
                                    {oneMaterial}{index !== props.one_work.materials.length - 1 ? ', ' : null}
                                </li>
                            )
                        })}
                    </ul>
                </section>
                <section className={one_work_scss.details_section}>
                    <div className={one_work_scss.more_info_noimp}>Размер</div>
                    <div className={one_work_scss.more_info_noimp_text}>
                        {props.one_work.size}
                    </div>
                </section>
                <section className={one_work_scss.details_section}>
                    <div className={one_work_scss.more_info_noimp}>Наличие рамы</div>
                    <div className={one_work_scss.more_info_noimp_text}>
                        {props.one_work.frame ? 'Да' : 'Нет'}
                    </div>
                </section>
                {props.one_work.customerId !== null ?
                    <section className={one_work_scss.details_section}>
                        <div className={one_work_scss.more_info_noimp}>Владелец</div>
                        <div className={one_work_scss.underline}
                             onClick={() => {
                                 Cookies.set('currentRole', ROLES.CUSTOMER)
                                 Cookies.set('currentId', props.one_work.customerId)
                                 if(props.one_work.customerId === Cookies.get('customerId')) {
                                     Cookies.set('role', ROLES.CUSTOMER)
                                 }
                                 router.push(MAIN_PATHS.PROFILE_CUSTOMER + `/${props.one_work.customerId}`)
                             }
                        }>
                            {props.one_work.customerName}
                        </div>
                    </section>
                    : null}
            </section>
            <p className={one_work_scss.info_text}>{props.one_work.description}</p>
            <ul className={one_work_scss.tags_section}>
                {props.one_work.tags.map((tag: string, index) => {
                    return (
                        <li className={one_work_scss.more_info_noimp + ' ' + one_work_scss.tag} key={index}>
                            {tag}
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}