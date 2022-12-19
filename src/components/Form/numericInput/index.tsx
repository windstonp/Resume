import { Control, useController } from "react-hook-form";
import { Container, Error, Input, Label } from "./style";

type InputProps = {
  control: Control,
  name: string,
  defaultValue?: string,
  label: string,
  placeholder: string,
  onChangeCustom?: (event: any) => void,
  error: any
}

export function InputNumericControlled(
  { control,
    name,
    defaultValue = "",
    label = "",
    placeholder,
    error
  }: InputProps) {
  const { field: {onChange, value, onBlur } } = useController({
    control,
    name,
    defaultValue
  })

  return (
    <Container>

        <Error>
          {error &&
            error
          }
        </Error>

      <Input
        itemRef={name}
        allowNegative={false}
        decimalScale={2}
        thousandSeparator=","
        onValueChange={(v) => onChange(v.value)}
        value={value}
        prefix={"$"}
        fixedDecimalScale
        id={name}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        placeholder={placeholder}
      />
      <Label
        htmlFor={name}
      >
        {label}
      </Label>
    </Container>
  );
}