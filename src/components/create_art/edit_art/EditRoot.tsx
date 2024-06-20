import {usePathname} from "next/navigation";
import {PATHS_CATEGORY} from "@/paths/main";
import {EditArtContainer} from "@/components/create_art/edit_art/art/EditArtContainer";
import {EditAuctionContainer} from "@/components/create_art/edit_art/auction/EditAuctionContainer";
import {EditEventContainer} from "@/components/create_event/edit/EditEventContainer";


export const EditRoot = () => {
    const pathname ='/' + usePathname().split('/')[2]

    switch (pathname) {
        case PATHS_CATEGORY.ART : {
            return <EditArtContainer/>
        }
        case PATHS_CATEGORY.AUCTION : {
            return <EditAuctionContainer/>
        }
        case PATHS_CATEGORY.EVENT : {
            return <EditEventContainer/>
        }
        default: {
            return <></>
        }
    }
}