export function containsOnlyDigits(input: any) {
    return /^\d+$/.test(input);
}

export function removeSpaces(input: string): string {
    return input.replace(/\s/g, "");
}