import works_profile_scss from "@/scss/components/profile/categories/WorksProfile.module.scss";

export const OneWorkCategoriesMainPhoto = (props: {photoUrl: string}) => {
    return (
        <section className={works_profile_scss.img_border}>
            <img src={props.photoUrl} className={works_profile_scss.one_work_img}
                 alt={'one work'}
                 crossOrigin="anonymous"/>
        </section>
    )
}