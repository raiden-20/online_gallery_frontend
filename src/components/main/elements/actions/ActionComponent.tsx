import main_scss from "@/scss/components/main/main_page/Main.module.scss";
import actions_scss from "@/scss/components/main/main_page/Actions.module.scss";

export const ActionComponent = () => {
    return (
        <section className={main_scss.root}>
            <header className={main_scss.header}>События</header>
            <section className={actions_scss.ul}>
                <section className={actions_scss.one_action}>
                    <img src={'/action1.jpg'} alt={'action'}/>
                    <section className={actions_scss.date_section}>
                        <div>26 апреля</div>
                        <div>―</div>
                        <div>10 мая</div>
                    </section>
                </section>
                <section className={actions_scss.one_action}>
                    <section className={actions_scss.date_section}>
                        <div>26 апреля</div>
                        <div>―</div>
                        <div>10 мая</div>
                    </section>
                    <img src={'/action2.jpg'} alt={'action'}/>
                </section>
            </section>
        </section>
    )
}