import {ArtShortInterface} from "@/interfaces/artInterface";
import {WorksComponent} from "@/components/categories/works/works/WorksComponent";
import {Filters, SizeInterface, SizeInterfaceValue} from "@/interfaces/filters";
import {useEffect, useState} from "react";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {usePathname, useRouter} from "next/navigation";

interface workInterface {
    currentFilters: Filters
    arts: ArtShortInterface[]
    GetArtsCategories(type: string, router: AppRouterInstance): void
    setFilters: boolean
    setSetFilters(setFilters: boolean): void
    input_name: string
}

export const WorksArts = (props: workInterface) => {
    const router = useRouter()

    const pathname = usePathname().split('/')
    const lastPath = pathname[pathname.length - 1]

    const [filteredArts, setFilteredArts] = useState(props.arts)


    useEffect(() => {
        props.GetArtsCategories(lastPath, router)
    }, []);

    useEffect(() => {
        if (props.input_name !== '') {
            setFilteredArts([...props.arts.filter(one => one.name.toLowerCase().includes(props.input_name))])
        } else {
            setFilteredArts(props.arts)
        }
    }, [props.input_name]);

    useEffect(() => {
        setFilteredArts(props.arts)
    }, [props.arts]);

    const isSameSize = (oneArt: ArtShortInterface) : boolean => {
        let flag = false
        props.currentFilters.size.forEach(sizeName => {
            debugger
            switch (sizeName) {
                case SizeInterface.SMALL : {
                    if (Number.parseInt(oneArt.size.split('x')[0]) <= SizeInterfaceValue.SMALL &&
                        Number.parseInt(oneArt.size.split('x')[1]) <= SizeInterfaceValue.SMALL) {
                        flag = true
                    }
                    break
                }
                case SizeInterface.MEDIUM : {
                    if (Number.parseInt(oneArt.size.split('x')[0]) > SizeInterfaceValue.SMALL &&
                        Number.parseInt(oneArt.size.split('x')[0]) < SizeInterfaceValue.BIG &&
                        Number.parseInt(oneArt.size.split('x')[1]) > SizeInterfaceValue.SMALL &&
                        Number.parseInt(oneArt.size.split('x')[1]) < SizeInterfaceValue.BIG) {
                        flag = true
                    }
                    break
                }
                case SizeInterface.BIG : {
                    if (Number.parseInt(oneArt.size.split('x')[0]) >= SizeInterfaceValue.BIG &&
                        Number.parseInt(oneArt.size.split('x')[1]) >= SizeInterfaceValue.BIG) {
                        flag = true
                    }
                    break
                }
            }
        })

        return flag
    }

    useEffect(() => {
        if (props.setFilters) {
            const arr = [...props.arts]
            const arrr= arr.filter((oneArt) =>
                (Number.parseInt(oneArt.price) >= Number.parseInt(props.currentFilters.priceStart)) && (Number.parseInt(oneArt.price) <= Number.parseInt(props.currentFilters.priceEnd) ||
                    oneArt.tags.some(val => props.currentFilters.tags.includes(val)) || oneArt.materials.some(val => props.currentFilters.materials.includes(val)) ||
                    props.currentFilters.artists.includes(oneArt.artistId) || oneArt.frame === props.currentFilters.frame ||
                    isSameSize(oneArt)))
            debugger
            setFilteredArts(arrr)
            props.setSetFilters(false)
        }
    }, [props.setFilters]);

    return <WorksComponent arts={filteredArts}/>
}