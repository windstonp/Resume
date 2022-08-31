import { Control, useController } from "react-hook-form";
import { Container, Select, Label } from "./style";

type Option = { value: string, label: string };
type InputProps = {
  control: Control,
  name: string,
  defaultValue?: string,
  label: string,
  placeholder: string,
  options: Option[];
}

export function SelectControlled(
  {control, 
  name, 
  label = "",
  placeholder,
  options
}: InputProps){
  const { field: { onChange, onBlur, value, ref }} = useController({
    control,
    name
  })
  return (
    <Container>
      <Select
        id={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name}
        ref={ref}
      >
        <option key="placeholder" value="" disabled selected>{placeholder}</option>
        {options.map((option)=>(
          <>
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          </>
        ))}
      </Select>
      <Label
        htmlFor={name}
      >
        {label}
      </Label>
    </Container>
  );
}