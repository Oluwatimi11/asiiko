import React from 'react'
import { CardBottom, CardBottomDiv, CardDiv, CardTop } from './card-styles'

const Card = ({CardHeading, CardItem, backgroundColorTop, backgroundColorBottom, width }) => {
  return (
    <CardDiv width={width}>
        <CardTop backgroundColor={backgroundColorTop}>
            {CardHeading}
        </CardTop>
        <CardBottom backgroundColor={backgroundColorBottom}>
            <CardBottomDiv>
            {CardItem}
            </CardBottomDiv>
        </CardBottom>
    </CardDiv>
  )
}

export default Card