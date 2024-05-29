import works_profile_scss from "@/scss/components/profile/categories/WorksProfile.module.scss";

export const OneWorkCategoriesData = (props: {artistName: string, name: string}) => {

    return (
        <section className={works_profile_scss.one_work_names}>
            <div className={'p ' + works_profile_scss.one_work_weight}>{props.artistName}</div>
            <div className={'p'}>{props.name}</div>
        </section>
    )
}