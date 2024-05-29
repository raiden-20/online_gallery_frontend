import one_work_scss from "@/scss/components/profile/categories/OneWork.module.scss";

export const OneWorkPhoto = (props: {photoUrls: string[]}) => {
    return (
        <ul className={one_work_scss.photo_section}>
            {props.photoUrls.map((onePhoto: string, index) => {
                return (
                    <img src={onePhoto} className={one_work_scss.one_photo} crossOrigin="anonymous"
                         alt={'art photo'} key={index}/>
                )
            })}
        </ul>
    )
}