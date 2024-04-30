import nav_profile_scss from "@/scss/components/profile/Navigation.module.scss";

interface ProfileNavInterface {
    whoIsClicked: number
    setWhoIsClicked(whoIsClicked: number): void
}


export const CustomerNavigationProfileComponent = (props: ProfileNavInterface) => {
    const categories = [ 'Коллекция' , 'О себе']

    return (
        <ul className={nav_profile_scss.root}>
            {categories.map((one_category: string, index) => {
                return (
                    <li className={props.whoIsClicked === index + 1? nav_profile_scss.active : undefined}
                        onClick={() => props.setWhoIsClicked(index + 1)} key={index}>
                        <button className={nav_profile_scss.button}>
                            {one_category}
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}