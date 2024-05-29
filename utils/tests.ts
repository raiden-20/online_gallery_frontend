export const months = [
    "января", "февраля", "марта",
    "апреля", "мая", "июня",
    "июля", "августа", "сентября",
    "октября", "ноября", "декабря"
];

export function containsOnlyDigits(input: any) {
    return /^\d+$/.test(input);
}

export function removeSpaces(input: string): string {
    return input.replace(/\s/g, "");
}

export const isEqualObject = (first_obj: any, second_obj: any) => {
    let flag = true
    Object.keys(first_obj).forEach(key => {
        if (first_obj[key] !== second_obj[key]) {
            flag = false
        }
    })
    return flag
}

export const reformatDateFull = (inputDate: string) => {
    const date = new Date(inputDate);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${day} ${month} ${year}, ${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
}

export const reformatDateFullNextDay = (inputDate: string) => {
    let date = new Date(inputDate)
    date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${day} ${month} ${year}, ${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
}

export const auctionTimeMessage = (startTime: string, endTime: string) => {
    const startDate = new Date(startTime)
    const endDate = new Date(endTime)
    const currDate = new Date()

    const ans = 'c ' + reformatDateFull(startTime) + "\n" + ' по ' + reformatDateFull(endTime)

    if (startDate < endDate && currDate < endDate && startDate <= currDate) {
        return 'до ' + reformatDateFull(endTime)
    } else if (currDate < startDate) {
        return ans
    } else {
        return 'Завершен'
    }
}

export const addRateToPrice = (rate: string, price: string) => {
    return Number.parseInt(price) + Number.parseInt(rate);
}

export const formatDate = (inputDate: string) => {

    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}`;
}

export const zerosForOrder = (orderId: string) => {
    let res = ''
    for (let i = 0; i < 8 - orderId.toString().length ; i++) {
        res += '0'
    }
    return res
}


