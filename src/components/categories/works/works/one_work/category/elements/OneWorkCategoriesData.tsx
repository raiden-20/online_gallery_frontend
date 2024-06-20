import works_profile_scss from "@/scss/components/profile/categories/WorksProfile.module.scss";

export const OneWorkCategoriesData = (props: {artistName: string, name: string}) => {

    return (
        <section className={works_profile_scss.one_work_names}>
            <abbr className={'p ' + works_profile_scss.one_work_weight} title={props.artistName}>{props.artistName}</abbr>
            <abbr className={'p'} title={props.name}>{props.name}</abbr>
        </section>
    )
}