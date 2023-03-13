import { ButtonContainer, VariantButton } from "./Button.styles";

interface ButtonProps {
  variant?: VariantButton;
}

export function Button({ variant = 'primary' }: ButtonProps) {
  return (
    <ButtonContainer variant={variant}>
      Enviar
    </ButtonContainer>
  )
}