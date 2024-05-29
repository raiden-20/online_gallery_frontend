import works_profile_scss from "@/scss/components/profile/categories/WorksProfile.module.scss";

export const OneWorkCategoriesPrice = (props: {price: string}) => {
    return (
        <section className={works_profile_scss.one_work_weight}>{props.price} ₽</section>
    )
}