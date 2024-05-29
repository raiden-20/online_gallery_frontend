import one_work_scss from "@/scss/components/profile/categories/OneWork.module.scss";
import {useRouter} from "next/navigation";
import Cookies from "js-cookie";
import {MAIN_PATHS, ROLES} from "@/paths/main";
import {ANONYMOUS, ANONYMOUS_RUS} from "@/paths/elements";

interface oneWorkDataInterface {
    type: string
    materials: string[]
    tags: string[]
    size: string
    frame: boolean
    customerId: string
    customerName: string
    description: string
}

export const OneWorkData = (props: oneWorkDataInterface) => {
    const router = useRouter()

    return (
        <section className={one_work_scss.art_info}>
            <section className={one_work_scss.art_table}>
                <section className={one_work_scss.details_section}>
                    <div className={one_work_scss.more_info_noimp}>Тип</div>
                    <div className={one_work_scss.more_info_noimp_text}>{props.type}</div>
                </section>
                <section className={one_work_scss.details_section}>
                    <div className={one_work_scss.more_info_noimp}>Материал</div>
                    <ul className={one_work_scss.materials_ul}>
                        {props.materials.map((oneMaterial: string, index) => {
                            return (
                                <li className={one_work_scss.more_info_noimp_text} key={index}>{' '}
                                    {oneMaterial}{index !== props.materials.length - 1 ? ', ' : null}
                                </li>
                            )
                        })}
                    </ul>
                </section>
                <section className={one_work_scss.details_section}>
                    <div className={one_work_scss.more_info_noimp}>Размер</div>
                    <div className={one_work_scss.more_info_noimp_text}>
                        {props.size}
                    </div>
                </section>
                <section className={one_work_scss.details_section}>
                    <div className={one_work_scss.more_info_noimp}>Наличие рамы</div>
                    <div className={one_work_scss.more_info_noimp_text}>
                        {props.frame ? 'Да' : 'Нет'}
                    </div>
                </section>
                {props.customerId !== null ?
                    <section className={one_work_scss.details_section}>
                        <div className={one_work_scss.more_info_noimp}>Владелец</div>
                        <div className={one_work_scss.underline}
                             onClick={() => {
                                 if (props.customerName !== ANONYMOUS ) {
                                     Cookies.set('currentRole', ROLES.CUSTOMER)
                                     Cookies.set('currentId', props.customerId)
                                     if(props.customerId === Cookies.get('customerId')) {
                                         Cookies.set('role', ROLES.CUSTOMER)
                                     }
                                     router.push(MAIN_PATHS.PROFILE_CUSTOMER + `/${props.customerId}`)
                                 }

                             }
                        }>
                            {props.customerName === ANONYMOUS ? ANONYMOUS_RUS : props.customerName}
                        </div>
                    </section>
                    : null}
            </section>
            <p className={one_work_scss.info_text}>{props.description}</p>
            <ul className={one_work_scss.tags_section}>
                {props.tags.map((tag: string, index) => {
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