import {instance, instanceFile} from "@/api/api_main";

export const ArtsAPI = {
    async CreateArtAPI(input_name: string, input_type: string, photos: File[], input_price: string,
                       input_year: string, input_description: string, input_size: string,
                       tags: string[], materials: string[], isAnonymous: boolean, isFrame: boolean) {
        try {
            const formData = new FormData()

            const json = {
                name : input_name,
                type: input_type,
                isPrivate: isAnonymous ? 'true': 'false',
                price: input_price,
                description: input_description,
                createDate: input_year,
                size: input_size,
                tags: tags,
                materials: materials,
                frame: isFrame ? 'true': 'false'

            }

            const dto_object = new Blob([JSON.stringify({
                name : input_name,
                type: input_type,
                isPrivate: isAnonymous ? 'true': 'false',
                price: input_price,
                description: input_description,
                createDate: input_year,
                size: input_size,
                tags: tags,
                materials: materials,
                isFrame: isFrame ? 'true': 'false'
            })], {
                type: 'application/json'
            })


            formData.append('ArtCreateDTO', dto_object);

            photos.forEach(img => {
                formData.append("photos", img)
            })

            debugger
            const response = await instanceFile.post(
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