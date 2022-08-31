import { Control, useController } from "react-hook-form";
import { Container, Input, Label } from "./style";

type InputProps = {
  control: Control,
  name: string,
  defaultValue?: string,
  label: string,
  type: "text" | "email",
  placeholder: string
}

export function InputControlled(
  {control, 
  name, 
  defaultValue = "",
  label = "",
  type,
  placeholder
}: InputProps){
  const { field: { onChange, onBlur, value, ref }} = useController({
    control,
    name,
    defaultValue
  })
  return (
    <Container>
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
      <Label
        htmlFor={name}
      >
        {label}
      </Label>
    </Container>
  );
}