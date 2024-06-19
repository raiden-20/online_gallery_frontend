import main_scss from '@/scss/components/main/Main.module.scss'

import {ArtistsMainContainer} from "@/components/main/elements/artists/ArtistsMainContainer";
import {MainArtsContainer} from "@/components/main/elements/arts/MainArtsContainer";
import {MainAuctionsContainer} from "@/components/main/elements/auctions/MainAuctionsContainer";
import {MainBannerContainer} from "@/components/main/elements/banner/MainBannerContainer";
import {MainEventsContainer} from "@/components/main/elements/actions/MainEventsContainer";

export const MainComponent = () => {
    return (
        <section className={main_scss.root}>
            <MainBannerContainer/>
            <MainArtsContainer/>
            <ArtistsMainContainer/>
            <MainAuctionsContainer/>
            <MainEventsContainer/>
        </section>
    )
}