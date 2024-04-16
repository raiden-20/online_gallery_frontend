import posts_artist_module from '@/scss/components/profile/categories/PostsArtist.module.scss'
import {
    OnePostArtistComponent
} from "@/components/profile/profile_elemets/categories/artist/posts/OnePostArtistComponent";

export const PostsArtistComponent = () => {

    return (
        <ul className={posts_artist_module.root}>
            <li>
                <OnePostArtistComponent/>
            </li>
            <li>
                <OnePostArtistComponent/>
            </li>
            <li>
                <OnePostArtistComponent/>
            </li>
        </ul>
    )
}