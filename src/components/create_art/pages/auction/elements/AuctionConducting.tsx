import create_art_data_scss from "@/scss/components/create_art/CreateArtData.module.scss";
import React, {useState} from "react";

interface AuctionConductingInterface {
    setStartTime(startTime: string): void
    startTime: string
    setEndTime(endTime: string): void
    endTime: string
}

export const AuctionConducting = (props: AuctionConductingInterface) => {
    const [message, setMessage] = useState('')
    const [isCLickedStart, setIsCLickedStart] = useState(false)
    const [isCLickedEnd, setIsCLickedEnd] = useState(false)



    return (
        <section className={create_art_data_scss.section_root}>
            <header className={create_art_data_scss.header}>Проведение аукциона</header>
            <section className={create_art_data_scss.inputs_section}>
                <input placeholder={`Время начала аукциона`}
                       type={props.startTime !== '' || isCLickedStart ? 'datetime-local' : 'text'}
                       value={props.startTime}
                       onFocus={() => setIsCLickedStart(true)}
                       onBlur={() => {
                           if (props.startTime === '') {
                               setIsCLickedStart(false)
                       }}}
                       onChange={(event) => props.setStartTime(event.target.value)}/>
                <input placeholder={'Время окончания аукциона'}
                       type={props.endTime !== '' || isCLickedEnd ? 'datetime-local' : 'text'}
                       value={props.endTime}
                       min={props.startTime}
                       onFocus={() => setIsCLickedEnd(true)}
                       onBlur={() => {
                           if (props.endTime === '') {
                               setIsCLickedEnd(false)
                           }}}
                       onChange={(event) => {
                           props.setEndTime(event.target.value)
                       }
                       }/>
            </section>
            {message !== '' ?
                <p className={'message'}>{message}</p>
            : null}
        </section>
    )
}