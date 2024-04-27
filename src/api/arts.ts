import {instance} from "@/api/api_main";

export const ArtsAPI = {
    async CreateArtAPI(input_name: string, input_type: string, photos: File[], input_price: string,
                       input_year: string, input_description: string, input_size: string,
                       tags: string[], materials: string[], isAnonymous: boolean, isFrame: boolean) {
        try {
            const formData = new FormData()

            formData.append('name', input_name)
            formData.append('type', input_type)
            photos.forEach(img => {
                formData.append("photos", img)
            })
            formData.append('isPrivate', isAnonymous ? 'true': 'false')
            formData.append('price', input_price)
            formData.append('description', input_description)
            formData.append('createDate', input_year)
            formData.append('size', input_size)
            tags.forEach(tag => {
                formData.append("tags", tag)
            })
            materials.forEach(material => {
                formData.append("materials", material)
            })
            formData.append('frame', isFrame ? 'true': 'false')

            debugger
            const response = await instance.post(
                '/art',
                formData
            );
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },
}