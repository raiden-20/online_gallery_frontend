import one_work_scss from "@/scss/components/profile/categories/OneWork.module.scss";
import {ArtInterface} from "@/interfaces/artInterface";

interface oneWorkDataInterface {
    one_work: ArtInterface
}

export const OneWorkData = (props: oneWorkDataInterface) => {
    return (
        <section className={one_work_scss.art_info}>
            <section className={one_work_scss.details_section}>
                <section className={one_work_scss.details_one_section}>
                    <div className={one_work_scss.more_info_noimp}>Тип</div>
                    <div className={one_work_scss.more_info_noimp}>Материал</div>
                    <div className={one_work_scss.more_info_noimp}>Размер</div>
                    <div className={one_work_scss.more_info_noimp}>Наличие рамы</div>
                    <div className={one_work_scss.more_info_noimp}>Владелец</div>
                </section>
                <section className={one_work_scss.details_one_section}>
                    <div className={one_work_scss.more_info_noimp_text}>{props.one_work.type}</div>
                    <ul>
                        {props.one_work.materials.map((oneMaterial: string, index) => {
                            return (
                                <li className={one_work_scss.more_info_noimp_text}>{
                                    oneMaterial + (index === props.one_work.materials.length - 1 ? ', ' : null)}
                                </li>
                            )
                        })}
                    </ul>
                    <div className={one_work_scss.more_info_noimp_text}>
                        {props.one_work.size} см
                    </div>
                    <div className={one_work_scss.more_info_noimp_text}>
                        {props.one_work.frame ? 'Да' : 'Нет'}
                    </div>
                    {props.one_work.customerId !== '' ?
                        <div className={one_work_scss.underline}>{props.one_work.customerName}</div>
                        : null}
                </section>
            </section>
            <p className = {one_work_scss.info_text}>{props.one_work.description}</p>
            <ul className={one_work_scss.tags_section}>
                {props.one_work.tags.map((tag: string) => {
                    return (
                        <li className={one_work_scss.more_info_noimp + ' ' + one_work_scss.tag}>
                            {tag}
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}