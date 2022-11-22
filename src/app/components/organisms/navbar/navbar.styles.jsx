import styled from "styled-components";
import Image from "../../atoms/image/image.component";

export const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const NavbarLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 10%;
`;

export const NavbarRight = styled.div`
  width: 90%;
`;

export const LogoImage = styled(Image)`
  margin-top: 0.5rem;
  height: 30px;
  width: 110px;
`;

