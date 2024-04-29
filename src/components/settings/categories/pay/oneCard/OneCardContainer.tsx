import {connect} from "react-redux";
import {EditCard} from "@/store/thunks/credentialsThunk";
import {OneCardSettingsComponent} from "@/components/settings/categories/pay/oneCard/OneCardSettingsComponent";


const mapStateToProps = () => {
    return {
    }
}

const mapDispatchToProps = {
    EditCard
}

export const OneCardContainer = connect(mapStateToProps, mapDispatchToProps)(OneCardSettingsComponent)