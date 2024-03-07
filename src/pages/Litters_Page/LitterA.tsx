import "react-image-gallery/styles/css/image-gallery.css";
import Litter from "../Litter";
import {LitterAListingData} from "../../data/LitterListings/LitterAListingData";

const LitterA = () => {
    return (
        <Litter kittensData={LitterAListingData}/>
    );
};

export default LitterA;
