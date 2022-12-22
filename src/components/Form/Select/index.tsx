import { Control, useController } from 'react-hook-form';
import { Container, Select, Label, Error } from './style';

type InputProps = {
  control: Control<any>;
  name: string;
  label: string;
  placeholder: string;
  options: string[];
  error?: any;
};

export function SelectControlled({
  control,
  name,
  label = '',
  placeholder,
  options,
  error,
}: InputProps) {
  const {
    field: { onChange, onBlur, value, ref },
  } = useController({
    control,
    name,
  });
  return (
    <Container>
      <Error>{error && error.message}</Error>
      <Select
        id={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name}
        ref={ref}
        defaultValue={placeholder}
      >
        <option disabled>{placeholder}</option>
        {options.map((item) => {
          return (
            <option value={item} key={item}>
              {item}
            </option>
          );
        })}
      </Select>
      <Label htmlFor={name}>{label}</Label>
    </Container>
  );
}
