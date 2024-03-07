import "react-image-gallery/styles/css/image-gallery.css";
import Litter from "../Litter";
import {LitterDListingData} from "../../data/LitterListings/LitterDListingData";

const LitterD = () => {
    return (
        <Litter kittensData={LitterDListingData}/>
    );
};

export default LitterD;
