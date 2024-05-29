import main_scss from '@/scss/components/main/Main.module.scss'

import {BannerComponent} from "@/components/main/elements/banner/BannerComponent";
import {ActionComponent} from "@/components/main/elements/actions/ActionComponent";
import {ArtistsMainContainer} from "@/components/main/elements/artists/ArtistsMainContainer";
import {MainArtsContainer} from "@/components/main/elements/arts/MainArtsContainer";
import {MainAuctionsContainer} from "@/components/main/elements/auctions/MainAuctionsContainer";

export const MainComponent = () => {
    return (
        <section className={main_scss.root}>
            <BannerComponent/>
            <MainArtsContainer/>
            <ArtistsMainContainer/>
            <MainAuctionsContainer/>
            <ActionComponent/>
        </section>
    )
}