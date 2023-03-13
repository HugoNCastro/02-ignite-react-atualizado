import styled, { css } from "styled-components";

export type VariantButton = 
  'primary' | 'secondary' | 'danger' | 'success';

interface VariantButtonStyle {
  variant: VariantButton;
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green'
};

export const ButtonContainer = styled.button<VariantButtonStyle>`
  width: 100px;
  height: 40px;
  border: 0;
  border-radius: 4px;
  margin: 8px;
  cursor: pointer;

  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.white};

  /* ${props => {
    return css`
      background-color: ${buttonVariants[props.variant]}
    `
  }} */
`