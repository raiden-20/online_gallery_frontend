import settings_scss from '@/app/scss/components/settings/Settings.module.scss'

export const AccountSettingsComponent = () => {
    return (
        <section className={settings_scss.main}>
            <section className={settings_scss.input_section}>
                <input placeholder={'ДД.ММ.ГГ'}/>
                <select>
                    <option value="man">Мужской</option>
                    <option value="woman">Женский</option>
                </select>
            </section>
            <input placeholder={'Эл. адрес'}/>
            <input placeholder={'Новый пароль'}/>
            <input placeholder={'Старый пароль'}/>
            <button className={'main_button'}>Сохранить</button>
            <button className={settings_scss.button}>Создать аккаунт художника</button>
            <button className={settings_scss.button}>Удалить аккаунт</button>
        </section>
    )
}