import styled from "styled-components";

export const ButtonsDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: ${({ mainWidth }) => mainWidth || "auto"};
`;