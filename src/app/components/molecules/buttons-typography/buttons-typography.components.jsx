import React from 'react'
import Button, {BUTTON_TYPE_CLASSES} from '../../atoms/button/button.component'
import { ButtonsDiv } from '../buttons-typography/buttons-typography.styles'


const Buttons = ({mainWidth, buttonText1, buttonText2, height1, height2, width1, width2, color1, color2, backgroundColor1, backgroundColor2, svgIcon, tobtn1, tobtn2, marginRight1, marginRight2 }) => {
  return (
    <ButtonsDiv mainWidth={mainWidth}>
    <Button 
    onClick={tobtn1}
    buttonType={BUTTON_TYPE_CLASSES.curved}
    width={width1}
    height={height1}
    color={color1}
    backgroundColor={backgroundColor1}
    marginRight={marginRight1}
    >{buttonText1}</Button>
    <Button 
    onClick={tobtn2}
    buttonType={BUTTON_TYPE_CLASSES.curved}
    width={width2}
    height={height2}
    color={color2}
    backgroundColor={backgroundColor2}
    marginRight={marginRight2}
    >{buttonText2}{svgIcon}</Button>
    </ButtonsDiv>
  )
}

export default Buttons;