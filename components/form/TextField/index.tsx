import { Input, InputProps, Label } from "reactstrap";

interface TextFieldProps extends InputProps {
  label?: string;
}

export default function TextField(props: TextFieldProps) {
  return (
    <div className="mb-3">
      <Label>{props.label}</Label>
      <Input {...props} />
    </div>
  );
}

export type { TextFieldProps };
