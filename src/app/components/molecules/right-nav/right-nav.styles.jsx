import styled from "styled-components";
import Buttons from "../buttons-typography/buttons-typography.components";

export const NavbarDiv = styled.div`
 display: flex;
  flex-flow: row nowrap;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0a76d5;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    font-size: 18px;
    align-items: flex-start;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;

export const NavbarList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-flow: row nowrap;
  width: 75%;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-flow: column nowrap;

    .nav-list {
      color: #fff;
    }
  }
`;

export const NavListItem = styled.li`
  font-weight: 700;
  font-size: 12px;
  margin: 0 1.5rem 1rem 1.5rem;
  cursor: pointer;

  @media only screen and (min-width: 481px) {
    margin: 0 .5rem;
} 
`;

export const NavbarButtons = styled(Buttons)`
  width: 25%;
`;
