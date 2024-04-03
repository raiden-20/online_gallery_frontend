interface AboutInterface {
    input_description: string
    setInput_description(input_description: string): void
}

export const About = (props: AboutInterface) => {
    return (
        <section>
            <textarea placeholder={'Введите информацию о себе'}>{props.input_description}</textarea>
            <section>
                <section>
                    <div>Проданные картины</div>
                    <div>10</div>
                </section>
                <section>
                    <div>Сумма продаж</div>
                    <div>100000 руб.</div>
                </section>
                <section>
                    <div>Платные подписчики</div>
                    <div>10</div>
                </section>
            </section>
        </section>
    )
}