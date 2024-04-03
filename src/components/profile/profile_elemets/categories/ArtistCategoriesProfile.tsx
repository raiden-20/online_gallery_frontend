import {
    ArtistNavigationProfileComponent
} from "@/components/profile/profile_elemets/navigation/ArtistNavigationProfileComponent";
import {WorksProfileComponent} from "@/components/profile/profile_elemets/categories/works/WorksProfileComponent";
import {useState} from "react";
import {About} from "@/components/profile/profile_elemets/categories/artist/about/About";

interface ArtistCategoryInterface {
    input_description: string
    setInput_description(input_description: string): void
}

export const ArtistCategoriesProfile = (props: ArtistCategoryInterface) => {
    const [whoIsClicked, setWhoIsClicked] = useState(1)

    return (
        <section>
            <ArtistNavigationProfileComponent setWhoIsClicked={setWhoIsClicked} whoIsClicked={whoIsClicked}/>
            {whoIsClicked === 1 ? <WorksProfileComponent/> :
            whoIsClicked === 4 ? <About input_description={props.input_description}
                                        setInput_description={props.setInput_description}/> : null}
        </section>
    )
}