import { Suspense } from 'react';
import styled from "styled-components";
import Listings from "../components/Listings";
import Features from "../components/Features";
import {KittensFeatures2} from "../data/InfoData";
import LoadingIndicator from "../components/LoadingIndicator";


const KittensSection = styled.section`
    width: 100%;
    height: 100%;
    padding: 0 0 5rem;
    /* Your styles here */
`;

const Kittens =() => {
    return (
        <>
            <Suspense fallback={<LoadingIndicator />}>
                <KittensSection>
                    <Features
                        heading={KittensFeatures2.heading}
                        paragraph1={KittensFeatures2.paragraph1}
                        paragraph2={KittensFeatures2.paragraph2}
                        button1Text={KittensFeatures2.button1Text}
                        button1Link={KittensFeatures2.button1Link}
                        button2Text={''}
                        button2Link={''}
                        imageSrc={KittensFeatures2.imageSrc}
                    />
                    <Listings/>
                </KittensSection>
            </Suspense>
        </>
    );
};

export default Kittens;
