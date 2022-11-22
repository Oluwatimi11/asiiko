import styled from 'styled-components'

export const CardDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: ${({ width }) => width || "30%"};
    height: ${({ height }) => height || "13rem"};
    background-color: transparent;
`;

export const CardTop = styled.div`
     background-color: ${({ backgroundColor }) => backgroundColor || "#000"};
     color: #fff;
     height: 35%;
     width: 100%;
     border-radius: 15px 15px 0 0;
     font-size: 20px;
     text-align: center;
`;

export const CardBottom = styled.div`
    background-color: ${({ backgroundColor }) => backgroundColor || "#dce7f9"};
     color: #fff;
     height: 65%;
     width: auto;
`;

export const CardBottomDiv = styled.div`
    padding: 2rem 5rem;
`;