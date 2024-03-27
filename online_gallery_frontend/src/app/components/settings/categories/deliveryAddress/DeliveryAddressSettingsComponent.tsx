import settings_scss from "@/app/scss/components/settings/Settings.module.scss";

export const DeliveryAddressSettingsComponent = () => {
    return (
        <section className={settings_scss.main}>
            <input placeholder={'ФИО'}/>
            <section className={settings_scss.input_section}>
                <input placeholder={'Страна'}/>
                <input placeholder={'Область'}/>
            </section>
            <section className={settings_scss.input_section}>
                <input placeholder={'Город'}/>
                <input placeholder={'Индекс'}/>
            </section>
            <input placeholder={'Адрес'}/>
            <button className={'main_button'}>Добавить адрес</button>
        </section>
    )
}