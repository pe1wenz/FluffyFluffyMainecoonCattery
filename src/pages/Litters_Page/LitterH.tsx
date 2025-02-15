import "react-image-gallery/styles/css/image-gallery.css";
import Litter from "../Litter";
import {LitterHListingData} from "../../data/LitterListings/LitterHListingData";

const LitterH = () => {
    return (
        <Litter kittensData={LitterHListingData}/>
    );
};

export default LitterH;
