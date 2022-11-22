import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 50px;
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "2.5rem"};
  color: ${({ color }) => color || "#fff"};
  background-color: ${({ backgroundColor }) => backgroundColor || "#531cd3"};
  margin-right: ${({ marginRight }) => marginRight || ".3rem"};
  font-size: 10px;
  font-weight: 700;
  border: 1px solid transparent;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* padding: 16px 24px; */
  gap: 16px;

  &:hover {
    border: none;
    background-color: ${({ backgroundColor }) => backgroundColor || "#1cc4d3"};
  } 
`; 
/* @media only screen and (min-width: 320px) {
  margin-right: .5rem;
  }

  @media only screen and (min-width: 481px) {
    margin-right: .3rem;
} */



export const CurvedButton = styled(BaseButton)`
  border-radius: 6px;
`;
