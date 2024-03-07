import Hero from "../components/Hero";
import {OurCatsSliderData} from "../data/SliderData";
import styled from "styled-components";

const HeroContainer = styled.div`
    height: 100vh;
    padding: 60px 0 0;
    
    @media screen and (max-width: 768px) {
        height: 60vh;
    }
`;
const OurCats = () => {
    return (
        <HeroContainer>
            <Hero slides={OurCatsSliderData}/>
        </HeroContainer>
    );
};

export default OurCats;
