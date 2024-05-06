import main_scss from '@/scss/components/main/Main.module.scss'

import {BannerComponent} from "@/components/main/elements/banner/BannerComponent";
import {PopularAndAuctionsComponent} from "@/components/main/elements/popular_auctions/PopularAndAuctionsComponent";
import {ActionComponent} from "@/components/main/elements/actions/ActionComponent";
import {ArtistsMainContainer} from "@/components/main/elements/artists/ArtistsMainContainer";

export const MainComponent = () => {
    return (
        <section className={main_scss.root}>
            <BannerComponent/>
            <PopularAndAuctionsComponent title={'Популярное'}
                                         photos={['/popular1.jpg', '/popular2.jpg', 'popular3.jpg']}/>
            <ArtistsMainContainer/>
            <PopularAndAuctionsComponent title={'Аукционы'}
                                         photos={['/auction1.jpg', '/auction2.jpg', 'auction3.jpg', 'auction4.jpg']}/>
            <ActionComponent/>
        </section>
    )
}