import { useState } from "react";
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
        placeholder={placeholder}
        options={options}
        classNamePrefix="react-select"
      />
      <Label
        htmlFor={name}
      >
        {label}
      </Label>
    </Container>
  );
}