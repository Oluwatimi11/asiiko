import React from "react";
import products from "../../../assets/img/product.jpg";
import { RiUser3Fill } from "react-icons/ri";
import { RiCompassFill } from "react-icons/ri";
import { HiChevronDoubleDown } from "react-icons/hi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import {
  IconSpan,
  MainDiv,
  MainIcon,
  MainLeftPanel,
  MainProduct,
  MainRightPanel,
  MainText,
  MainButtons,
  MainDivide,
  DivideLine,
  DivideCenter,
  MainHeading,
  MainParagraph,
} from "./main.styles";
import Buttons from "../../molecules/buttons-typography/buttons-typography.components";


const arrowDown = <HiChevronDoubleDown className="ArrowDown"/>;

const Main = ({tobtn1}) => {
  return (
    <MainDiv>
      <MainLeftPanel>
        <MainIcon className="MainIcon-Top">
          <IconSpan>
            <RiUser3Fill className="Icon-1" />
          </IconSpan>
        </MainIcon>
        <MainText>
          <MainHeading>
            Track Your Employees'
            <br /> Time And Automate <br />
            Your Timesheets.
          </MainHeading>
          <MainDivide>
            <DivideLine></DivideLine>
            <DivideCenter>
              <IoMdCheckmarkCircleOutline className="mark" />
            </DivideCenter>
            <DivideLine></DivideLine>
          </MainDivide>
          <MainParagraph>
            Asiiko helps you track your employees' time and automate
            <br /> timesheets. Every day, real-time updates that let you keep on
            <br /> top of your team's job activities.
          </MainParagraph>
          <MainButtons>
            <Buttons
              width1="170px"
              height1="45px"
              color1="#fff"
              backgroundColor1="#0a76d5"
              buttonText1="GET STARTED TODAY"
              tobtn1={tobtn1}
              width2="170px"
              height2="45px"
              color2="#000"
              backgroundColor2="#9ef9d9"
              buttonText2="LEARN MORE"
              svgIcon={arrowDown}
            />
          </MainButtons>
        </MainText>
        <MainIcon className="MainIcon-Bottom">
          <IconSpan>
            <RiCompassFill className="Icon-2" />
          </IconSpan>
        </MainIcon>
      </MainLeftPanel>
      <MainRightPanel>
        <MainProduct url={products} />
      </MainRightPanel>
    </MainDiv>
  );
};

export default Main;
