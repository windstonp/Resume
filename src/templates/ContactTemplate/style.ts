import styled, { css } from "styled-components";

export const Container = styled.main`
  display: flex;
  position: relative;
  flex-direction: row;
  width: 100%;
  padding: 100px 100px;
  @media (max-width: 768px) {
    padding: 50px 25px;
  }
`

export const ContactForm = styled.form`
  flex: 1.5;
`

export const ContactInfoContainer = styled.div`
  flex: 1;
`

export const ContactInfoGroup = styled.div`
  margin-bottom: 30px;
`
export const ContactInfoLink = styled.a`
  ${({theme, color})=> css`
    flex: 2;
    color: ${color ? color : theme.colors.primary };
    font-family: ${theme.fonts.family};
    font-weight: ${theme.fonts.weight.normal};
    font-size: ${theme.fonts.sizes.small};
  `}
`
export const GroupInput = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  & div:first-child{
    margin-right: 10px;
  }
`

export const ButtonContainer = styled.div`
  margin: 30px 0px;
`

const styles = {
  Container, 
  ContactForm, 
  ContactInfoContainer, 
  ContactInfoGroup,
  ContactInfoLink, 
  GroupInput,
  ButtonContainer
}

export default styles;