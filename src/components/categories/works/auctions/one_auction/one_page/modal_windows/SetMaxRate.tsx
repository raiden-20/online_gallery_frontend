import {Cancel_ButtonComponent} from "@/components/cancel_button/Cancel_ButtonComponent";
import delete_account_scss from "@/scss/components/settings/DeleteAccount.module.scss";
import auctions_modal_scss from '@/scss/components/categories/auctions/AuctionsModal.module.scss'
import React, {useCallback, useEffect, useState} from "react";
import create_art_data_scss from "@/scss/components/create_art/CreateArtData.module.scss";
import subscriptions_scss from "@/scss/components/subscriptions/Subscriptions.module.scss";
import Select, {SingleValue} from "react-select";
import {CHARACTER_RESTRICTION} from "@/paths/elements";

interface SetMaxRate {
    auctionId: string

    lastPrice: string,
    rate: string

    setSetMaxRate(setMaxRate: boolean): void

    SetMaxRate(auctionId: string, isAnonymous: boolean, maxRate: number, setSetRate: (setMaxRate: boolean) => void): void
}

export const SetMaxRate = (props: SetMaxRate) => {

    const [isAnonymous, setIsAnonymous] = useState(false)
    const [setMaxRate, setSetMaxRate] = useState(false)
    const [message, setMessage] = useState('')

    const [currentMaxRatesOptions, setCurrentMaxRatesOptions] = useState<{ value: number, label: string }[]>([])
    const [currentMaxRatesFiltered, setCurrentMaxRatesFiltered] = useState<{ value: number, label: string }[]>([])
    const [currentMaxRate, setCurrentMaxRate] = useState<{ value: number, label: string } | undefined>(undefined)

    useEffect(() => {
        if (setMaxRate && currentMaxRate !== undefined) {
            props.SetMaxRate(props.auctionId, isAnonymous, currentMaxRate.value, props.setSetMaxRate)
        }
        setSetMaxRate(false)
    }, [setMaxRate]);

    useEffect(() => {
        let price = Number.parseInt(props.lastPrice)
        const ratesArr: { value: number, label: string }[] = []
        for (let i = 0; i < CHARACTER_RESTRICTION.MAX_RATE_SELECT_COUNT; i++) {
            price += Number.parseInt(props.rate)
            ratesArr.push({
                value: price,
                label: price.toString()
            })
        }
        setCurrentMaxRatesOptions(ratesArr)
        setCurrentMaxRatesFiltered(ratesArr)
    }, []);


    const setInputChange = useCallback((event: string) => {
        // @ts-ignore
        const filtered = currentMaxRatesFiltered.filter((option) =>
            option.label.toLowerCase().includes(event.toLowerCase())
        );
        setCurrentMaxRatesFiltered(filtered);
    }, [])

    const setOnChange = useCallback((newValue: SingleValue<{ value: number; label: string; }>) => {
        if (newValue) {
            setCurrentMaxRate(newValue)
        } else {
            setCurrentMaxRate(undefined)
        }
    }, [])


    return (
        <section className={'page_modal_window'}>
            <section className={'bg2'} onClick={() => props.setSetMaxRate(false)}></section>
            <main className={'modal_window'}>
                <Cancel_ButtonComponent setCancel={props.setSetMaxRate} whatSet={false}/>
                <section className={delete_account_scss.root}>
                    <header className={delete_account_scss.header}>
                        Максимальная ставка
                    </header>
                    <p>Когда другие пользователи будут делать ставки, система от Вашего имени будет перебивать их
                        ставки, не превышая установленную максимальную ставку</p>
                    <Select className={create_art_data_scss.select}
                            noOptionsMessage={() => 'Нет вариантов'}
                            placeholder={
                                <section className={subscriptions_scss.search_section}>
                                    <div>Сумма,₽</div>
                                </section>}
                            options={currentMaxRatesOptions}
                            onChange={setOnChange}
                            value={currentMaxRate}
                            isClearable={true}
                            onInputChange={setInputChange}
                            classNamePrefix={'custom-select'}/>
                    <section className={auctions_modal_scss.checkbox}>
                        <input type={"checkbox"} checked={isAnonymous} onChange={(event) =>
                            setIsAnonymous(event.target.checked)}/>
                        <section>Участвовать анонимно</section>
                    </section>
                    {message !== '' ?
                        <p className={'message'}>{message}</p>
                        : null
                    }
                    <footer className={delete_account_scss.footer_buttons}>
                        <button className={'cancel_button'} onClick={() => props.setSetMaxRate(false)}>
                            Отмена
                        </button>
                        <button className={'main_button'}
                                onClick={() => setSetMaxRate(true)}>
                            Установить
                        </button>
                    </footer>
                </section>
            </main>
        </section>
    )
}