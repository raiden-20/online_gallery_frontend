import {connect} from "react-redux";
import {GetArtsCategories} from "@/store/thunks/artThunk";
import {ArtShortInterface, MainPageArts} from "@/interfaces/artInterface";
import {useEffect, useState} from "react";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {useRouter} from "next/navigation";
import {PopularAndAuctionsComponent} from "@/components/main/elements/popular_auctions/PopularAndAuctionsComponent";

interface state {
    art : {
        arts: ArtShortInterface[]
    }
}

const mapStateToProps = (state: state) => {
    return {
        arts: state.art.arts
    }
}

const mapDispatchToProps = {
    GetArtsCategories
}

interface arts {
    arts: ArtShortInterface[]
    GetArtsCategories(type: string, router: AppRouterInstance): void
}

export const MainArts = (props: arts) => {
    const router = useRouter()

    const [arts, setArts] = useState<MainPageArts[]>([])

    useEffect(() => {
        const artArr: MainPageArts[] = []
        for (let i = 0; i < props.arts.length; i++) {
            artArr.push({
                name: props.arts[i].name,
                photo: props.arts[i].photoUrl,
                artistName: props.arts[i].artistName,
                id: props.arts[i].artId,
                price: props.arts[i].price
            })
        }
        setArts(artArr)
    }, [props.arts]);


    useEffect(() => {
        props.GetArtsCategories('paintings', router)
    }, []);

    return <PopularAndAuctionsComponent title={'Популярное'}
                                        arts={arts}/>
}

export const MainArtsContainer = connect(mapStateToProps, mapDispatchToProps)(MainArts)