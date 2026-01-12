import "react-image-gallery/styles/css/image-gallery.css";
import Litter from "../Litter";
import {LitterIListingData} from "../../data/LitterListings/LitterIListingData";

const LitterI = () => {
    return (
        <Litter kittensData={LitterIListingData}/>
    );
};

export default LitterI;
