import one_work_scss from "@/scss/components/profile/categories/OneWork.module.scss";

export const OneWorkHeader = (props: {artistName: string, name: string, createDate: string}) => {
    return (
        <header className={one_work_scss.art_info_header}>
            <div className={'p ' + one_work_scss.art_artist}>{props.artistName}</div>
            <div className={'p ' + one_work_scss.art_name}>{props.name},
                {props.createDate.substring(0, 4)}</div>
        </header>
    )
}