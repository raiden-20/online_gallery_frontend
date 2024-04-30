import {ArtistNavigationProfileComponent} from "@/components/profile/profile_elemets/navigation/ArtistNavigationProfileComponent";
import {useState} from "react";
import {AboutArtistComponent} from "@/components/profile/profile_elemets/categories/artist/about/AboutArtistComponent";
import {MainPostContainer} from "@/components/profile/profile_elemets/categories/artist/posts/MainPostContainer";
import {
    WorkArtistProfileContainer
} from "@/components/profile/profile_elemets/categories/artist/artist_works/WorksArtistProfileContainer";
import {
    SuggestionSubscriptionOnArtist
} from "@/components/profile/profile_elemets/categories/artist/posts/subscribe/SuggestionSubscriptionOnArtist";
import suggestion_scss from "@/scss/components/profile/categories/SuggestionSubscribeOnArtist.module.scss";
import Cookies from "js-cookie";
import {
    SuggestionSubscribeOnArtist
} from "@/components/profile/profile_elemets/categories/artist/posts/subscribe/SuggestionSubscribeOnArtist";

interface ArtistCategoryInterface {
    input_description: string
    setInput_description(input_description: string): void
    setIsNeedChangeData(flag: boolean): void
    isEditMobile : boolean
    setIsEditMobile(flag: boolean): void

    countSoldArts: string
    salesAmount: string
    countSubscribers: string
    isPrivateSubscribe: boolean

}


export const ArtistCategoriesProfile = (props: ArtistCategoryInterface) => {

    const [whoIsClicked, setWhoIsClicked] = useState(1)
    const [artistId] = useState(Cookies.get('artistId') as string)
    const [currentId] = useState(Cookies.get('currentId') as string)


    return (
        <section className={suggestion_scss.page}>
            <ArtistNavigationProfileComponent setWhoIsClicked={setWhoIsClicked}
                                              whoIsClicked={whoIsClicked}
                                              countSubscribers={props.countSubscribers}/>
            {whoIsClicked === 1 ? <WorkArtistProfileContainer/> :
            whoIsClicked === 3 ?
                props.countSubscribers !== '' && props.countSubscribers !== null ?
                    artistId === currentId || props.isPrivateSubscribe ? <MainPostContainer/> :
                    <SuggestionSubscribeOnArtist/> :
                    <SuggestionSubscriptionOnArtist/> :

            whoIsClicked === 4 ? <AboutArtistComponent input_description={props.input_description}
                                                       setInput_description={props.setInput_description}
                                                       setIsNeedChangeData={props.setIsNeedChangeData}
                                                       isEditMobile={props.isEditMobile}
                                                       setIsEditMobile={props.setIsEditMobile}
                                                       countSoldArts={props.countSoldArts}
                                                       countSubscribers={props.countSubscribers}
                                                       salesAmount={props.salesAmount}/> : null}
        </section>
    )
}