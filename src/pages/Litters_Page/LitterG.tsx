import "react-image-gallery/styles/css/image-gallery.css";
import Litter from "../Litter";
import {LitterGListingData} from "../../data/LitterListings/LitterGListingData";

const LitterG = () => {
    return (
        <Litter kittensData={LitterGListingData}/>
    );
};

export default LitterG;
