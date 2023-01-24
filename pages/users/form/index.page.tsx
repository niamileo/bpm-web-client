import FormikTextField from "components/form/TextField/formik";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { Button } from "reactstrap";
import { createUser } from "services/UserService";

export default function UserForm() {
  const router = useRouter();

  const handleSubmit = (data: object) => {
    createUser(data).then(() => {
      toast.success("User Created Successfully");
      router.push("/users");
    });
  };

  return (
    <Formik initialValues={{}} onSubmit={handleSubmit}>
      {() => (
        <Form>
          <FormikTextField name="first_name" label="First Name" />
          <FormikTextField name="last_name" label="Last Name" />
          <FormikTextField name="email" label="Email" />
          <FormikTextField name="password" label="Password" />
          <FormikTextField name="username" label="Username" />
          <Button type="submit">Create User</Button>
        </Form>
      )}
    </Formik>
  );
}
