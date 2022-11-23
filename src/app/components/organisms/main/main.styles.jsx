import styled from "styled-components";
import Image from "../../atoms/image/image.component";
import Text, { Heading } from "../../atoms/typography";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (min-width: 320px) {
    flex-direction: column;
  }

  @media only screen and (min-width: 481px) {
    flex-direction: column;
  }

  @media only screen and (min-width: 1025px) {
    flex-direction: row;
}
`;

export const MainLeftPanel = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  width: 50%;
  margin-top: 4rem;

  .MainIcon-Top {
    padding-left: 60%;
  }

  .MainIcon-Bottom {
    margin-top: 2.5rem;
    padding-left: 70%;
  }

  @media only screen and (min-width: 320px) {
    text-align: center;
    width: 100%;
  }

  @media only screen and (min-width: 1025px) {
    width: 50%;
    margin-top: 4rem;
    text-align: justify;
}
`;

export const MainIcon = styled.div``;

export const IconSpan = styled.span`
  border-radius: 50%;
  padding: 0.8rem 0.6rem 0.4rem 0.6rem;
  height: 13px;
  width: 13px;
  background-color: #fff;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, 0.15);

  .Icon-1 {
    font-size: 20px;
    font-weight: bold;
    color: #467ae9;
  }

  .Icon-2 {
    font-size: 20px;
    font-weight: bold;
    color: #000;
  }
`;

export const IconTop = styled.svg`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: #467ae9;
`;

export const IconBottom = styled.svg`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: #000;
`;

export const MainText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MainHeading = styled(Heading)`
  font-size: 50px;
  font-weight: 700;
  color: #000;
  font-family: "Secular One";

  @media only screen and (min-width: 320px) {
    font-size: 30px;
    font-weight: 400;
  }

  @media only screen and (min-width: 481px) {
    font-weight: 500;
    margin-bottom: 3rem;
  }

  @media only screen and (min-width: 769px) {
    font-size: 40px;
  font-weight: 600;
  }

  @media only screen and (min-width: 1025px) {
    font-size: 50px;
    font-weight: 700;
  }
`;

export const MainDivide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;

  @media only screen and (min-width: 320px) {
    text-align: center;
    width: 100%;
  }

  @media only screen and (min-width: 481px) {
    align-items: center;
    margin: auto;
    width: 70%;
  }

  @media only screen and (min-width: 769px) {
    width: 50%;
    margin: auto;
    align-items: center;
  }

  @media only screen and (min-width: 1025px) {
    width: 50%;
    margin: 0;
    align-items: justify;
  }
`;

export const DivideLine = styled.div`
  width: 50%;
  height: 0;
  border: 2px solid #6cf2c3;
`;

export const DivideCenter = styled.div`
  margin: 0 1rem;

  .mark {
    color: #6cf2c3;
    font-size: 22px;
    font-weight: 700;
  }
`;

export const MainParagraph = styled(Text)`
  font-size: 14px;
  font-weight: 700;
  color: #888;
  line-height: 20px;
  margin: 2rem 0;
`;

export const MainRightPanel = styled.div`
  width: 50%;
  justify-content: center;

  @media only screen and (min-width: 320px) {
    align-items: center;
    width: 100%;
  }

  @media only screen and (min-width: 481px) {
    align-items: center;
    width: 100%;
  }
`;

export const MainButtons = styled.div`
  padding-right: 17rem;

  @media only screen and (min-width: 320px) {
    width: 100%;
  }

  @media only screen and (min-width: 481px) {
    /* width: 100%; */
    padding: auto;
  }

  @media only screen and (min-width: 1025px) {
    width: 60%;
}

  .ArrowDown {
    font-size: 15px;
    color: #111;
  }
`;

export const MainProduct = styled(Image)`
  margin: 10% 5%;
  width: 600px;
  height: 600px;
  object-fit: cover;

  @media only screen and (min-width: 320px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 300px;
    height: 300px;
  }

  @media only screen and (min-width: 481px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 400px;
    height: 400px;
  }

  @media only screen and (min-width: 768px) {
    width: 500px;
    height: 500px;
  }

  @media only screen and (min-width: 1025px) {
    width: 500px;
    height: 500px;
    margin: 10% 5%;
}

`;
