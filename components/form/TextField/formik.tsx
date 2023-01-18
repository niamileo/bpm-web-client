import { useField } from "formik";
import TextField, { TextFieldProps } from ".";

export default function FormikTextField(props: TextFieldProps) {
  const [field, meta] = useField(props);
  const { name, onBlur, onChange, value, ...rest } = props;
  const errorText = meta.error && meta.touched ? meta.error : "";
  return <TextField {...field} {...rest} />;
}
