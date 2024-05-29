import {connect} from "react-redux";
import { MainPageArts} from "@/interfaces/artInterface";
import {useEffect, useState} from "react";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {useRouter} from "next/navigation";
import {PopularAndAuctionsComponent} from "@/components/main/elements/popular_auctions/PopularAndAuctionsComponent";
import {AuctionCategoriesInterface} from "@/interfaces/auctionInterface";
import {GetAuctionsCategories} from "@/store/thunks/auctionsThunk";

interface state {
    auction : {
        auctions: AuctionCategoriesInterface[]
    }
}

const mapStateToProps = (state: state) => {
    return {
        auctions: state.auction.auctions
    }
}

const mapDispatchToProps = {
    GetAuctionsCategories
}

interface auctions {
    auctions: AuctionCategoriesInterface[]
    GetAuctionsCategories(router: AppRouterInstance): void
}

export const MainAuctions = (props: auctions) => {
    const router = useRouter()

    const [arts, setArts] = useState<MainPageArts[]>([])

    useEffect(() => {
        const artArr: MainPageArts[] = []
        for (let i = 0; i < props.auctions.length; i++) {
            artArr.push({
                name: props.auctions[i].name,
                photo: props.auctions[i].photoUrl,
                artistName: props.auctions[i].artistName,
                id: props.auctions[i].auctionId,
                price: props.auctions[i].lastPrice
            })
        }
        setArts(artArr)
    }, [props.auctions]);


    useEffect(() => {
        props.GetAuctionsCategories(router)
    }, []);

    return <PopularAndAuctionsComponent title={'Аукционы'}
                                        arts={arts}/>
}

export const MainAuctionsContainer = connect(mapStateToProps, mapDispatchToProps)(MainAuctions)