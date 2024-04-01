import InfoSection from "../components/InfoSection";
import {
    OwningFeatures1,
    OwningFeatures2, OwningFeatures3,
    OwningInfoDataOne,
    OwningInfoDataTwo
} from "../data/InfoData";
import styled from "styled-components";
import ScrollUpFadeIn from "../components/ScrollUpFadeIn";
import Features from "../components/Features";

const OwningContainer = styled.div`
    padding: 60px 0 0;
`;

const ChapterHeading = styled.div`
    font-size: 1.5rem;
    //display: flex;
    display: inline-flex;
    align-items: center;
    padding: 1rem 2rem;
    
    h2{
        font-family: "Space Grotesk", sans-serif;
        text-transform: uppercase;
        color: black;
        font-size: 24px;
        border-bottom: solid 7px #CD853F;
    }
`;
const InfoSectionWrapper = styled.div`

    
    h1{
        display: inline-flex;
        align-items: center;
        justify-content: center;
        
        font-family: "Space Grotesk", sans-serif;
        text-transform: uppercase;
        color: black;
        font-size: 24px;
        border-bottom: solid 7px #CD853F;
    }
`;

const FeatureWrapper = styled.div`

    
    h1{
        display: inline-flex;
        align-items: center;
        justify-content: center;
        
        font-family: "Space Grotesk", sans-serif;
        text-transform: uppercase;
        color: black;
        font-size: 24px;
        border-bottom: solid 7px #CD853F;
    }
`;



function Owning() {
    return (
        <OwningContainer>

            <ChapterHeading>
                <h2>Policies & Procedures</h2>
            </ChapterHeading>
            <FeatureWrapper>
                <Features
                    heading={OwningFeatures1.heading}
                    paragraph1={OwningFeatures1.paragraph1}
                    paragraph2={''}
                    button1Text={OwningFeatures1.button1Text}
                    button1Link={OwningFeatures1.button1Link}
                    button2Text={OwningFeatures1.button2Text}
                    button2Link={OwningFeatures1.button2Link}
                    imageSrc={OwningFeatures1.imageSrc}
                />
            </FeatureWrapper>
            <ScrollUpFadeIn>
                <InfoSectionWrapper>
                    <InfoSection {...OwningInfoDataOne}/>
                </InfoSectionWrapper>
            </ScrollUpFadeIn>
            <ScrollUpFadeIn>
                <FeatureWrapper>
                    <Features
                        heading={OwningFeatures2.heading}
                        paragraph1={OwningFeatures2.paragraph1}
                        paragraph2={OwningFeatures2.paragraph2}
                        button1Text={''}
                        button1Link={''}
                        button2Text={''}
                        button2Link={''}
                        imageSrc={OwningFeatures2.imageSrc}
                    />
                </FeatureWrapper>
            </ScrollUpFadeIn>
            <ScrollUpFadeIn>
                <InfoSectionWrapper>
                    <InfoSection {...OwningInfoDataTwo}/>
                </InfoSectionWrapper>
            </ScrollUpFadeIn>
            <ScrollUpFadeIn>
                <FeatureWrapper>
                    <Features
                        heading={OwningFeatures3.heading}
                        paragraph1={OwningFeatures3.paragraph1}
                        paragraph2={OwningFeatures3.paragraph2}
                        button1Text={''}
                        button1Link={''}
                        button2Text={''}
                        button2Link={''}
                        imageSrc={OwningFeatures3.imageSrc}
                    />
                </FeatureWrapper>
            </ScrollUpFadeIn>
        </OwningContainer>
    )
}

export default Owning;
