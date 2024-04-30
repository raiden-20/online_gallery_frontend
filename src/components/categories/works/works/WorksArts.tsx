import {ArtShortInterface} from "@/interfaces/artInterface";
import {WorksComponent} from "@/components/categories/works/works/WorksComponent";

interface workInterface {
    arts: ArtShortInterface[]
}

export const WorksArts = (props: workInterface) => {

    return <WorksComponent arts={props.arts}/>
}