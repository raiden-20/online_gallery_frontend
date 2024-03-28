import auth_main_scss from "@/scss/components/auth/Auth_main.module.scss";

export const ForgotPasswordComponent = () => {

    return (
        <main className={auth_main_scss.form}>
            <p>Введите ваш электронный адрес, на который придет новый пароль</p>
            <input placeholder={'Эл. адрес'}/>
            <button className={'main_button'}>Сбросить пароль</button>
        </main>
    )
}