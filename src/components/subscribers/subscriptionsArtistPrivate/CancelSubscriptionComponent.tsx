
import delete_account_scss from "@/scss/components/settings/DeleteAccount.module.scss";
import React from "react";
import subscriptions_scss from "@/scss/components/subscriptions/Subscriptions.module.scss";

interface cancelInterface {
    setIsCanceledClicked(isCanceledClicked: boolean): void
}

export const CancelSubscriptionComponent = (props: cancelInterface) => {
    return (
        <section className={delete_account_scss.page}>
            <section className={'bg ' + delete_account_scss.bg}
                     onClick={() => props.setIsCanceledClicked(false)}></section>
            <main className={delete_account_scss.modal_window}>
                <section className={delete_account_scss.root}>
                    <header className={delete_account_scss.header}>
                        Перестать поддерживать художника?
                    </header>
                    <p className={subscriptions_scss.p}>Ваша подписка на Linko будет действовать до 19.04.2024, после чего доступ к эксклюзивному контенту будет ограничен.</p>
                    <footer className={delete_account_scss.footer_buttons}>
                        <button className={'cancel_button'} onClick={() => props.setIsCanceledClicked(false)}>
                            Оставить подписку
                        </button>
                        <button className={'main_button'}>
                            Отменить подписку
                        </button>
                    </footer>
                </section>
            </main>
        </section>
    )
}