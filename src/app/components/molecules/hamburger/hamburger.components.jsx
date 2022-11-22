import React, { useState } from 'react';
import RightNav from '../../molecules/right-nav/right-nav.component'
import { BurgerDiv, StyledBurger } from './hamburger.styles';

const Burger = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <BurgerDiv>
      <div>
      <RightNav open={open}/>
      </div>
      <div>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      </div>
    </BurgerDiv>
  )
};

export default Burger;