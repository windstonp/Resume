import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    position: relative;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: calc(100% + 100px);
    background: ${theme.colors.secondary};

    h1,
    h2 {
      color: ${theme.colors.background[50]};
      text-align: center;
      margin: 0.5rem 0;
    }

    p {
      color: ${theme.colors.background[100]};
      width: 80%;
      margin: auto;
      text-align: center;
    }
  `}
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 25px 0;
`;
export const CanvasComponent = styled.div`
  height: 300px !important;
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
