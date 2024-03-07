import "react-image-gallery/styles/css/image-gallery.css";
import Litter from "../Litter";
import {LitterCListingData} from "../../data/LitterListings/LitterCListingData";

const LitterC = () => {
    return (
        <Litter kittensData={LitterCListingData}/>
    );
};

export default LitterC;
