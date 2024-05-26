import {usePathname} from "next/navigation";
import {PATHS_CATEGORY} from "@/paths/main";
import {EditArtContainer} from "@/components/create_art/edit_art/art/EditArtContainer";
import {EditAuctionContainer} from "@/components/create_art/edit_art/auction/EditAuctionContainer";


export const EditRoot = () => {
    const pathname ='/' + usePathname().split('/')[2]

    if (pathname === PATHS_CATEGORY.ART) {
        return <EditArtContainer/>
    } else if (pathname === PATHS_CATEGORY.AUCTION) {
        return <EditAuctionContainer/>
    }
}