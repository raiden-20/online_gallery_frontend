
import delete_account_scss from "@/scss/components/settings/DeleteAccount.module.scss";
import React from "react";
import subscriptions_scss from "@/scss/components/subscriptions/Subscriptions.module.scss";

interface cancelInterface {
    setIsCanceledClicked(isCanceledClicked: boolean): void
}

export const CancelSubscriptionComponent = (props: cancelInterface) => {
    return (
        <section className={'page_modal_window'}>
            <section className={'bg2'}
                     onClick={() => props.setIsCanceledClicked(false)}></section>
            <main className={'modal_window'}>
                <section className={delete_account_scss.root}>
                    <header className={delete_account_scss.header}>
                        Перестать поддерживать художника?
                    </header>
                    <p className={subscriptions_scss.p}>Часть денег за неиспользуемый период вернется к Вам в течение 7 дней</p>
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