import "react-image-gallery/styles/css/image-gallery.css";
import Litter from "../Litter";
import {LitterFListingData} from "../../data/LitterListings/LitterFListingData";

const LitterF = () => {
    return (
        <Litter kittensData={LitterFListingData}/>
    );
};

export default LitterF;
