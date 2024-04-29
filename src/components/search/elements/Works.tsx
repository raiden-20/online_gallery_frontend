import {useEffect, useState} from "react";
import {Works} from "@/components/categories/works/works/Works";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {useRouter} from "next/navigation";
import {ArtShortInterface} from "@/interfaces/artInterface";
import {ART_TYPES} from "@/paths/elements";

interface WorksInterface {
    whoIsClicked: number
    search: ArtShortInterface[],
    input_name: string

    getAllArts(type: string, router: AppRouterInstance): void
    getSmthByName(input_name: string, type: string): void,
}

export const Works = (props: WorksInterface) => {

    const router = useRouter()

    const [category, setCategory] = useState(ART_TYPES.PAINTING)

    useEffect(() => {
        let type = ''
        switch (props.whoIsClicked) {
            case 3 : {
                setCategory(ART_TYPES.PAINTING)
                break
            }
            case 4 : {
                setCategory(ART_TYPES.PHOTO)
                break
            }
            case 5 : {
                setCategory(ART_TYPES.SCULPTURE)
                break
            }
        }
        if (props.input_name === '') {
            props.getAllArts(type, router)
        }else {
            props.getSmthByName(props.input_name, 'art')
        }
    }, [props.input_name]);

    useEffect(() => {
        props.getAllArts('paintings', router)
    }, []);

    return (
        <Works GetArtsCategories={props.getAllArts} arts={props.search} category={category}/>
    )
}