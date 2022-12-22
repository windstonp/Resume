import styled, { css } from 'styled-components';

export const Container = styled.section`
  display: flex;
  position: relative;
  flex-direction: row;
  width: 100%;
  min-height: calc(100vh - 205px);

  @media only screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex: 1.5;
  justify-content: center;
  flex-direction: column;
`;

export const ContactInfoContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
`;

export const ContactInfoGroup = styled.div`
  margin-bottom: 30px;
`;
export const ContactInfoLink = styled.a`
  ${({ theme, color }) => css`
    flex: 2;
    color: ${color || theme.colors.primary};
    font-family: ${theme.fonts.family};
    font-weight: ${theme.fonts.weight.normal};
    font-size: ${theme.fonts.sizes.small};
  `}
`;
export const GroupInput = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 3rem;
  & div:first-child {
    margin-right: 1rem;
  }

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    margin-top: 0;

    & > div {
      margin-top: 1.5rem;
    }
  }
`;

export const ButtonContainer = styled.div`
  margin: 3rem 0px;
  display: flex;
  flex-direction: row;
  align-items: center;

  button {
    margin-right: 3rem;
  }

  @media only screen and (max-width: 425px) {
    flex-direction: column;
    button {
      margin-right: 0;
      margin-bottom: 1.5rem;
    }
  }
`;

export const SvgShape = styled.div`
  ${({ theme }) => css`
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: translateY(-2px);

    & svg {
      position: relative;
      display: block;
      width: calc(100% + 1.3px);
      height: 100px;
      transform: rotateY(180deg);

      @media only screen and (max-width: 650px) {
        width: calc(200% + 1.3px);
        height: 40px;
      }
    }

    & .shape-fill {
      fill: ${theme.colors.secondary};
    }
  `}
`;

export const WaveSvg = styled.div`
  background: ${({ theme }) => theme.colors.background[100]};
  width: 100%;
  overflow: hidden;
  line-height: 0;

  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 75px;

    @media (max-width: 1024px) {
      height: 50px;
    }

    @media only screen and (max-width: 650px) {
      height: 30px;
    }
  }

  .shape-fill {
    fill: ${({ theme }) => theme.colors.background[50]};
  }
`;

const styles = {
  Container,
  ContactForm,
  ContactInfoContainer,
  ContactInfoGroup,
  ContactInfoLink,
  GroupInput,
  ButtonContainer,
  WaveSvg,
};

export default styles;
