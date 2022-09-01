import styled, { css } from 'styled-components';

export const Container = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
 
`

export const Content = styled.div`
  display: flex;

  @media only screen  and (max-width: 650px){
    flex-direction: column;
  }
`;

export const SvgShape = styled.div`
  ${({theme}) => css`
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
`