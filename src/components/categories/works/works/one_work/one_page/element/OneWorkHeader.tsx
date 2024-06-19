import one_work_scss from "@/scss/components/profile/categories/OneWork.module.scss";

export const OneWorkHeader = (props: {artistName: string, name: string, createDate: string}) => {
    return (
        <header className={one_work_scss.art_info_header}>
            <abbr className={'p ' + one_work_scss.art_artist} title={props.artistName}>{props.artistName}</abbr>
            <abbr className={'p ' + one_work_scss.art_name} title={props.name + ', ' + props.createDate.substring(0, 4)}>{props.name},
                {props.createDate.substring(0, 4)}
            </abbr>
        </header>
    )
}