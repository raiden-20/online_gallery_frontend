import Cryptr from "cryptr";

export function encrypt(text: string) {
    const secretKey = process.env.NEXTAUTH_SECRET as string
    const cryptr = new Cryptr(secretKey)

    return cryptr.encrypt(text)
}

export function decrypt(encryptedString: string) {
    const cryptr = new Cryptr('my-own-secret-189656-haha')

    return cryptr.decrypt(encryptedString)
}