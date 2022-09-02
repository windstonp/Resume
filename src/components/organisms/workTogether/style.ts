import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: ${({theme}) => theme.colors.background[100]};
  width: 100%;
  text-align: center;

  a{
    font-size:  ${({theme}) => theme.fonts.sizes.huge};
    color: ${({theme}) => theme.colors.primary };
    text-decoration: none;
    font-weight: ${({theme}) => theme.fonts.weight.bold};
    &:hover{
      text-decoration: underline;
    }
  }
`

export const WaveSvg = styled.div` 

  background: ${({theme}) => theme.colors.background[100]};
  width: 100%;
  overflow: hidden;
  line-height: 0;

  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 75px;

    @media (max-width: 1024px){
      height: 50px;
    }

    @media only screen and (max-width: 650px){
      height: 30px;

    }

  }

  .shape-fill {
      fill: ${({theme}) => theme.colors.background[50]};
  }
`;
