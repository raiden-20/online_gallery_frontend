import support_scss from '@/scss/components/support/Support.module.scss'
import {useState} from "react";
import Image from "next/image";
import close_icon from '@/assets/icons/settings/close.svg'
import open_icon from '@/assets/icons/settings/open.svg'

export const Information = () => {
    const [isSubscribe, setIsSubscribe] = useState(false)
    const [isAuction, setIsAuction] = useState(false)
    const [isEvent, setIsEvent] = useState(false)
    const [isDelivery, setIsDelivery] = useState(false)
    const [isAccount, setIsAccount] = useState(false)
    const [isAnonymous, setIsAnonymous] = useState(false)
    const [isCommission, setIsCommission] = useState(false)

    return (
        <section className={support_scss.root}>
            <header className={support_scss.header}>
                Информация
            </header>
            <section className={support_scss.one_section}>
                <header className={support_scss.one_section_header}>
                    <section className={support_scss.one_section_header_text}>
                        Ежемесячная подписка
                    </section>
                    {isSubscribe ?
                        <button onClick={() => setIsSubscribe(false)}>
                            <Image src={open_icon} width={0} height={0} alt={'open'}/>
                        </button>
                        :
                        <button onClick={() => setIsSubscribe(true)}>
                            <Image src={close_icon} width={0} height={0} alt={'close'}/>
                        </button>
                    }
                </header>
                {isSubscribe ?
                    <main className={support_scss.one_section_main}>
                        <section className={support_scss.one_section_main_text}>Художник может подключить опцию
                            ежемесячной подписки, у которой сам устанавливает <strong>стоимость</strong>. Это дает
                            ему возможность
                            публиковать посты и выставлять товары, которые доступны <strong>только для
                                поддержавших</strong>.
                        </section>
                        <section className={support_scss.one_section_main_text}>Художник получает <strong>доход </strong>
                            от подписки на
                            основную банковскую карту раз в 30 дней. У покупателя <strong>списывается </strong>
                            стоимость за подписку в
                            начале каждого платежного периода.
                        </section>
                    </main>
                    :
                    null
                }
            </section>
            <section className={support_scss.one_section}>
                <header className={support_scss.one_section_header}>
                    <section className={support_scss.one_section_header_text}>
                        Правила аукционов
                    </section>
                    {isAuction ?
                        <button onClick={() => setIsAuction(false)}>
                            <Image src={open_icon} width={0} height={0} alt={'open'}/>
                        </button>
                        :
                        <button onClick={() => setIsAuction(true)}>
                            <Image src={close_icon} width={0} height={0} alt={'close'}/>
                        </button>
                    }
                </header>
                {isAuction ?
                    <main className={support_scss.one_section_main}>
                        <section className={support_scss.one_section_main_text}>
                            <strong>Лот</strong> – товар, который выставляется для продажи на аукцион.
                        </section>
                        <section className={support_scss.one_section_main_text}>
                            <strong>Шаг аукциона</strong> – это величина, на которую каждый раз увеличивается цена
                            торгов. Размер шага
                            составляет 5% от стартовой цены лота.
                        </section>
                        <section className={support_scss.one_section_main_text}>
                            <strong>Ставка</strong> – сумма, которую готов заплатить покупатель за лот в случае победы в
                            торгах.
                        </section>
                        <section className={support_scss.one_section_main_text}>
                            <strong>Максимальная ставка</strong> – максимальная сумма, которую покупатель готов
                            заплатить за лот. Когда
                            другие пользователи будут делать ставки, система от Вашего имени будет перебивать их ставки,
                            не
                            превышая установленную максимальную ставку. Если два участница устанавливают одинаковую
                            максимальную ставку, победителем становится тот участник, который первым ввел эту сумму.
                        </section>
                        <br></br>
                        <section className={support_scss.one_section_main_text}>
                            Аукцион длится ограниченное время, которое устанавливается художником. Участники не могут
                            отказаться от своих ставок.
                        </section>
                        <section className={support_scss.one_section_main_text}>
                            Победителем становится тот, кто последним сделал наибольшую ставку по истечении времени.
                        </section>
                        <section className={support_scss.one_section_main_text}>
                            После победы на аукционе лот необходимо оплатить в разделе «Заказы» в течение 24 часов,
                            иначе
                            аккаунт покупателя будет заблокирован, а аукцион удален.
                        </section>
                    </main>
                    :
                    null
                }
            </section>
            <section className={support_scss.one_section}>
                <header className={support_scss.one_section_header}>
                    <section className={support_scss.one_section_header_text}>
                        События
                    </section>
                    {isEvent ?
                        <button onClick={() => setIsEvent(false)}>
                            <Image src={open_icon} width={0} height={0} alt={'open'}/>
                        </button>
                        :
                        <button onClick={() => setIsEvent(true)}>
                            <Image src={close_icon} width={0} height={0} alt={'close'}/>
                        </button>
                    }
                </header>
                {isEvent ?
                    <main className={support_scss.one_section_main}>
                        <section className={support_scss.one_section_main_text}>
                            События длятся <strong>ограниченное время </strong> и посвящены определенной теме. Художникам заранее приходит
                            уведомление о проведении события, к которому они могут присоединиться до его начала.
                        </section>
                        <section className={support_scss.one_section_main_text}>
                            Если товар принимает участие в благотворительном событии, то выручка от его продажи
                            направляется на <strong>благотворительные цели</strong>.
                        </section>
                    </main>
                    :
                    null
                }
            </section>
            <section className={support_scss.one_section}>
                <header className={support_scss.one_section_header}>
                    <section className={support_scss.one_section_header_text}>
                        Доставка
                    </section>
                    {isDelivery ?
                        <button onClick={() => setIsDelivery(false)}>
                            <Image src={open_icon} width={0} height={0} alt={'open'}/>
                        </button>
                        :
                        <button onClick={() => setIsDelivery(true)}>
                            <Image src={close_icon} width={0} height={0} alt={'close'}/>
                        </button>
                    }
                </header>
                {isDelivery ?
                    <main className={support_scss.one_section_main}>
                        <section className={support_scss.one_section_main_text}>
                            Доставка товара осуществляется <strong>за счет </strong> художника. Художник должен указать
                            трек-номер и
                            другие подробности о доставке в разделе <strong>«Заказы»</strong> .
                        </section>
                    </main>
                    :
                    null
                }
            </section>
            <section className={support_scss.one_section}>
                <header className={support_scss.one_section_header}>
                    <section className={support_scss.one_section_header_text}>
                        Блокировка аккаунта
                    </section>
                    {isAccount ?
                        <button onClick={() => setIsAccount(false)}>
                            <Image src={open_icon} width={0} height={0} alt={'open'}/>
                        </button>
                        :
                        <button onClick={() => setIsAccount(true)}>
                            <Image src={close_icon} width={0} height={0} alt={'close'}/>
                        </button>
                    }
                </header>
                {isAccount ?
                    <main className={support_scss.one_section_main}>
                        <section>
                            Администрация сайта имеет право <strong>заблокировать</strong> Ваш аккаунт в случае:
                        </section>
                        <ul className={support_scss.one_section_main_ul}>
                            <li>публикация неприемлемого контента, такого как порнография, насилие, ненавистный контент
                                и т.д;
                            </li>
                            <li>неуплаты стоимости выигранного лота в течение 24 часов;</li>
                            <li>многократные жалобы от других пользователей;</li>
                            <li>незаконная деятельность, такая как мошенничество или продажа запрещенных товаров.</li>
                        </ul>
                    </main>
                    :
                    null
                }
            </section>
            <section className={support_scss.one_section}>
                <header className={support_scss.one_section_header}>
                    <section className={support_scss.one_section_header_text}>
                        Анонимная покупка
                    </section>
                    {isAnonymous ?
                        <button onClick={() => setIsAnonymous(false)}>
                            <Image src={open_icon} width={0} height={0} alt={'open'}/>
                        </button>
                        :
                        <button onClick={() => setIsAnonymous(true)}>
                            <Image src={close_icon} width={0} height={0} alt={'close'}/>
                        </button>
                    }
                </header>
                {isAnonymous ?
                    <main className={support_scss.one_section_main}>
                        <section className={support_scss.one_section_main_text}>
                            При выборе опции «анонимная покупка» имя покупателя <strong>не будет </strong>
                            отображаться на сайте. Оно
                            будет доступно художнику, чей товар был куплен.
                        </section>
                    </main>
                    :
                    null
                }
            </section>
            <section className={support_scss.one_section}>
                <header className={support_scss.one_section_header}>
                    <section className={support_scss.one_section_header_text}>
                        Комиссия сайта
                    </section>
                    {isCommission ?
                        <button onClick={() => setIsCommission(false)}>
                            <Image src={open_icon} width={0} height={0} alt={'open'}/>
                        </button>
                        :
                        <button onClick={() => setIsCommission(true)}>
                            <Image src={close_icon} width={0} height={0} alt={'close'}/>
                        </button>
                    }
                </header>
                {isCommission ?
                    <main className={support_scss.one_section_main}>
                        <section className={support_scss.one_section_main_text}>
                            Сайт берет комиссию <strong>в размере 15%</strong> от продажи товаров, лотов и стоимость ежемесячной
                            подписки.
                        </section>
                    </main>
                    :
                    null
                }
            </section>
        </section>
    )
}