import {useState} from "react";
import Cookies from "js-cookie";
import {PostsArtistComponent} from "@/components/profile/profile_elemets/categories/artist/posts/PostsArtistComponent";
import {
    SuggestionSubscribeOnArtist
} from "@/components/profile/profile_elemets/categories/artist/posts/subscribe/SuggestionSubscribeOnArtist";
import main_posts_scss from '@/scss/components/profile/categories/MainPosts.module.scss'

export const MainPostsComponent = () => {

    const [artistId] = useState(Cookies.get('artistId'))
    const [currentId] = useState(Cookies.get('currentId'))

// todo проверка есть ли подписка
    return (
        <section className={main_posts_scss.root}>
            {/*{artistId === currentId ?*/}
            {/*    <PostsArtistComponent/> /* <SuggestionSubscribeOnArtist/> */}
            {/*    :*/}
            {/*    <PostsArtistComponent/>*/}
            {/*}*/}
                <SuggestionSubscribeOnArtist/>
        </section>
    )
}