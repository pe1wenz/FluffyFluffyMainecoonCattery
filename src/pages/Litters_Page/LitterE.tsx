import "react-image-gallery/styles/css/image-gallery.css";
import Litter from "../Litter";
import {LitterEListingData} from "../../data/LitterListings/LitterEListingData";

const LitterE = () => {
    return (
        <Litter kittensData={LitterEListingData}/>
    );
};

export default LitterE;
