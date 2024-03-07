import "react-image-gallery/styles/css/image-gallery.css";
import Litter from "../Litter";
import {LitterBListingData} from "../../data/LitterListings/LitterBListingData";

const LitterB = () => {
    return (
        <Litter kittensData={LitterBListingData}/>
    );
};

export default LitterB;
