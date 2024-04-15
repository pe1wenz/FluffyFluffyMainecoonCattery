import React from "react";
import { Button } from "./Button";
import styled from "styled-components";
import { IoMdArrowRoundForward } from "react-icons/io";

interface FeaturesProps {
    heading: string;
    paragraph1: string;
    paragraph2: string;
    button1Text: string;
    button1Link: string;
    button2Text: string;
    button2Link: string;
    imageSrc: string;
    customButtonText?: string;
    customButtonLink?: string;
}

const Section = styled.section`
  background: rgba(0, 13, 26, 0.94);
  padding: 12rem 0 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Container = styled.div`
  background: white;
  padding: 3rem 2rem;
  position: relative;
`;

const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Content = styled.div`
  flex: 0 0 50%;
  @media screen and (max-width: 950px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 220px;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 2rem;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.5;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
  justify-content: flex-start;
  padding: 1rem;
`;

const ColumnRight = styled.div`
  position: absolute;
  top: -100px;
  right: 0;
  max-width: 850px;
  max-height: 820px;
  height: 140%;
  width: 45%;
  padding-left: 1rem;
    padding-right: 2rem;
  padding-bottom: 2rem;

  @media screen and (max-width: 950px) {
    height: 320px;
    top: -95px;
    width: 80%;
    margin: 0 auto;
    left: 0;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const CustomButton = styled(Button)`
  margin-bottom: 1rem;
`;

const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 0.5rem;
`;

const Features: React.FC<FeaturesProps> = ({
                                               heading,
                                               paragraph1,
                                               paragraph2,
                                               button1Text,
                                               button1Link,
                                               button2Text,
                                               button2Link,
                                               imageSrc,
                                               customButtonText,
                                               customButtonLink
                                           }) => {
    return (
        <Section>
            <Container>
                <Wrap>
                    <ColumnLeft>
                        <Content>
                            <h1>{heading}</h1>
                            <p>{paragraph1}</p>
                            <p>{paragraph2}</p>

                            {customButtonText && (
                                <CustomButton to={customButtonLink} target="_blank" rel="noopener noreferrer">
                                    {customButtonText}
                                    <Arrow />
                                </CustomButton>
                            )}

                            {button2Text !== '' && (

                                <CustomButton to={button2Link} target="_blank" rel="noopener noreferrer">
                                    {button2Text}
                                    <Arrow />
                                </CustomButton>
                            )}
                            {button1Text !== '' && (
                                <CustomButton to={button1Link} target="_blank" rel="noopener noreferrer">
                                    {button1Text}
                                    <Arrow />
                                </CustomButton>
                            )}

                        </Content>
                    </ColumnLeft>
                    <ColumnRight>
                        <Image src={imageSrc} />
                    </ColumnRight>
                </Wrap>
            </Container>
        </Section>
    );
};

export default Features;
