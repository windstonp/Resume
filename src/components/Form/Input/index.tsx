import { Control, useController } from 'react-hook-form';
import { Container, Error, Input, Label } from './style';

type InputProps = {
  control: Control<any>;
  name: string;
  defaultValue?: string;
  label: string;
  type: 'text' | 'email';
  placeholder: string;
  error?: any;
};

export function InputControlled({
  control,
  name,
  defaultValue = '',
  label = '',
  type,
  placeholder,
  error,
}: InputProps) {
  const {
    field: { onChange, onBlur, value, ref },
  } = useController({
    control,
    name,
    defaultValue,
  });
  return (
    <Container>
      <Error>{error && error}</Error>

      <Input
        id={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name}
        ref={ref}
        placeholder={placeholder}
        type={type}
      />
      <Label htmlFor={name}>{label}</Label>
    </Container>
  );
}
