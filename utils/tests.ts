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