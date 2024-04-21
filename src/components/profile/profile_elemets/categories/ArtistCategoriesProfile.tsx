import {
    ArtistNavigationProfileComponent
} from "@/components/profile/profile_elemets/navigation/ArtistNavigationProfileComponent";
import {useState} from "react";
import {AboutArtistComponent} from "@/components/profile/profile_elemets/categories/artist/about/AboutArtistComponent";
import {PostsArtistComponent} from "@/components/profile/profile_elemets/categories/artist/posts/PostsArtistComponent";
import {WorksProfileComponent} from "@/components/profile/profile_elemets/categories/works/WorksProfileComponent";

interface ArtistCategoryInterface {
    input_description: string
    setInput_description(input_description: string): void
    setIsNeedChangeData(flag: boolean): void
    isEditMobile : boolean
    setIsEditMobile(flag: boolean): void
}

export const ArtistCategoriesProfile = (props: ArtistCategoryInterface) => {
    const [whoIsClicked, setWhoIsClicked] = useState(1)

    return (
        <section>
            <ArtistNavigationProfileComponent setWhoIsClicked={setWhoIsClicked} whoIsClicked={whoIsClicked}/>
            {whoIsClicked === 1 ? <WorksProfileComponent/> :
            whoIsClicked === 3 ? <PostsArtistComponent/> :
            whoIsClicked === 4 ? <AboutArtistComponent input_description={props.input_description}
                                                       setInput_description={props.setInput_description}
                                                       setIsNeedChangeData={props.setIsNeedChangeData}
                                                       isEditMobile={props.isEditMobile}
                                                       setIsEditMobile={props.setIsEditMobile}/> : null}
        </section>
    )
}