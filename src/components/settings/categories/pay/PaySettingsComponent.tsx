import settings_scss from "@/scss/components/settings/Settings.module.scss";

export const PaySettingsComponent = () => {
    return (
        <section className={settings_scss.address_pay_main}>
            <input placeholder={'Номер карты'}/>
            <section className={settings_scss.input_section}>
                <input placeholder={'ММ/ГГ'}/>
                <input type={'password'} placeholder={'CVV'}/>
            </section>
            <button className={'main_button'}>Добавить карту</button>
        </section>
    )
}