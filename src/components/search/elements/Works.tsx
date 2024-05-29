import {useEffect} from "react";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {useRouter} from "next/navigation";
import {ArtShortInterface} from "@/interfaces/artInterface";
import {ART_TYPES_MANY} from "@/paths/elements";
import {WorksComponent} from "@/components/categories/works/works/WorksComponent";

interface WorksInterface {
    whoIsClicked: number
    search: ArtShortInterface[],
    input_name: string

    getAllArts(type: string, router: AppRouterInstance): void
    getSmthByName(input_name: string, type: string): void,
}

export const Works = (props: WorksInterface) => {

    const router = useRouter()


    useEffect(() => {
        let type = ''
        switch (props.whoIsClicked) {
            case 3 : {
                type = ART_TYPES_MANY.PAINTINGS
                break
            }
            case 4 : {
                type = ART_TYPES_MANY.PHOTOS
                break
            }
            case 5 : {
                type = ART_TYPES_MANY.SCULPTURES
                break
            }
        }
        if (type !== '') {
            if (props.input_name === '') {
                props.getAllArts(type, router)
            }else {
                props.getSmthByName(props.input_name, type)
            }
        }
    }, [props.input_name, props.whoIsClicked]);

    return (
        <WorksComponent arts={props.search}/>
    )
}