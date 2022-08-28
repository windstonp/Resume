import styled from "styled-components";

export const DesktopContainer = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 1024px){
    display: none;
  }
`;
export const ContainerOption = styled.li`
  margin-left: 15px;
`;

export const MobileContainer = styled.div`
  display: none;
  @media (max-width: 1024px){
    display: block;
  }
`;

const Style = {ContainerOption, DesktopContainer, MobileContainer}

export default Style;