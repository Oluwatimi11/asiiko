import styled from "styled-components";
import Image from "../../atoms/image/image.component";
import { Heading } from "../../atoms/typography";
import Buttons from "../../molecules/buttons-typography/buttons-typography.components";
import Card from "../../molecules/card/card-components";

export const MainCard = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  padding: 5rem 2rem;
`;

export const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 4rem;
  border-radius: 30px;
  width: 100%;
  height: 30rem;
  background-color: #fff;

  @media only screen and (min-width: 320px) {
    height: 40rem;
    width: 100%;
    padding: 2rem 2rem;
  }

  @media only screen and (min-width: 481px) {
    padding: 2rem 4rem;
  }

  @media only screen and (min-width: 769px) {
    height: 40rem;
  }

  @media only screen and (min-width: 1025px) {
    height: 30rem;
    width: 80%;
  }
`;


export const CardTop = styled.div`
  padding-left: 100%;

  @media only screen and (min-width: 320px) {
   padding-left: 0;
   padding-right: 100%;
  }

  @media only screen and (min-width: 769px) {
    padding-left: 100%;
   padding-right: 0;
} 
`;

export const CardMid = styled.div`
  align-items: center;
  width: 100%;
`;

export const CardHead = styled(Heading)`
  text-align: center;
  font-size: 18px;
  color: #fff;
  margin-top: 2rem;
`;

export const CardHeader = styled(Heading)`
  text-align: center;
  font-size: 35px;
  line-height: 50px;
  margin-bottom: 2rem;

  @media only screen and (min-width: 320px) {
    margin: auto;
    font-size: 25px;
    line-height: 30px;
  }

`;

export const CardIcon = styled.div`
  /* padding-left: 100%; */

  .Cancel-Icon {
    font-size: 30px;
  }
`;

export const CardBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  width: 100%;

  @media only screen and (min-width: 320px) {
    flex-direction: column;
    margin: auto .5rem;
    align-items: center;
  }

  @media only screen and (min-width: 1025px) {
    flex-direction: row;
    height: 0;
  }

  .divide {
    @media only screen and (min-width: 320px) {
      height: 5rem;
      width: 0;
    }

    @media only screen and (min-width: 1025px) {
    }
  }
`;

export const CardImage = styled(Image)`
  width: 100%;
  height: 60px;
`;

export const CardButtons = styled(Buttons)`
  padding: 0 3px;
  margin-top: 5rem;
`;

export const Cards = styled(Card)`

  @media only screen and (min-width: 320px) {
    width: 100%;
  }

  @media only screen and (min-width: 1025px) {
    width: 45%;
  }
`;
