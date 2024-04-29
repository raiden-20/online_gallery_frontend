import {ArtShortInterface} from "@/interfaces/artInterface";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {WorksComponent} from "@/components/categories/works/works/WorksComponent";

interface workInterface {
    category: string
    arts: ArtShortInterface[]
    GetArtsCategories(type: string, router: AppRouterInstance): void
}

export const Works = (props: workInterface) => {
    const router = useRouter()

    useEffect(() => {
        props.GetArtsCategories(props.category.toLowerCase(), router)
    }, []);

    return <WorksComponent arts={props.arts}/>
}