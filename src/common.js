import styled from "styled-components";

import LogoImg from "./logo.png";

const LogoComp = styled.img`
    width: 289px;
`;

export const Logo = () => (
    <LogoComp src={LogoImg} />
);