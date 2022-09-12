import styled, { css } from 'styled-components';

const Heading = css`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-weight: ${theme.fonts.weight.bold};
  `}
`;

export const Heading1 = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.huge};
    line-height: ${theme.fonts.heights.xxlarge};
    ${Heading};
  `}
`;

export const Heading2 = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.xlarge};
    line-height: ${theme.fonts.heights.xlarge};
    ${Heading};
  `}
`;

export const Heading3 = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.large};
    line-height: ${theme.fonts.heights.large};
    ${Heading};
    color: ${theme.colors.secondary}
  `}
`;

export const Heading4 = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.medium};
    line-height: ${theme.fonts.heights.medium};
    ${Heading};
    color: ${theme.colors.secondary}
  `}
`;