import React from "react";
import { FaTimes } from "react-icons/fa";
import store from "../../../assets/img/playstore.jpg";
import {
  CardDiv,
  CardIcon,
  CardImage,
  CardTop,
  CardBottom,
  CardHeader,
  CardHead,
  CardButtons,
  MainCard,
  Cards,
  CardMid,
} from "./card-type.styles";

const CardType = ({ handleClose }) => {
  return (
    <MainCard onClick={handleClose}>
      <CardDiv
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <CardTop>
          <CardIcon>
            <FaTimes onClick={handleClose} className="Cancel-Icon" />
          </CardIcon>
        </CardTop>
        <CardMid>
          <CardHeader>
            Start using Asiiko for your <br />
            team today!
          </CardHeader>
        </CardMid>
        <CardBottom>
          <Cards
            CardHeading={<CardHead>For Organizations</CardHead>}
            CardItem={
              <CardButtons
                width1="130px"
                height1="40px"
                color1="#fff"
                backgroundColor1="#0a76d5"
                marginRight1=".3rem"
                buttonText1="LOG IN"
                width2="130px"
                height2="40px"
                color2="#000"
                backgroundColor2="#fff"
                buttonText2="SIGN UP"
              />
            }
            width="45%"
          />
          <div className="divide"></div>
          <Cards
            CardHeading={<CardHead>For Workers</CardHead>}
            CardItem={<CardImage url={store} />}
            width="45%"
            backgroundColorTop="#0f7c2f"
            backgroundColorBottom="#d8f9e2"
          />
        </CardBottom>
      </CardDiv>
    </MainCard>
  );
};

export default CardType;
