import styled from "styled-components";

export const ButtonsDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: ${({ mainWidth }) => mainWidth || "auto"};

    /* @media only screen and (min-width: 320px) {
        flex-direction: column;
  } */

  /* @media only screen and (min-width: 1025px) {
    width: 300px;
  } */
`;