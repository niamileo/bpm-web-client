import FormikTextField from "components/form/TextField/formik";
import { Form, Formik } from "formik";
import useHttp from "hooks/use-http";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { Button, Row } from "reactstrap";
import { updateProject, fetchProjectById } from "services/ProjectService";

export default function General() {
  const router = useRouter();

  const { data } = useHttp<Project>(
    fetchProjectById,
    { id: router.query.id },
    true
  );

  const handleSubmit = (data: object) => {
    // @ts-ignore
    updateProject({ id: router.query.id, ...data }).then(() => {
      toast.success("Project Updated Successfully");
    });
  };

  return (
    <Row>
      <Formik
        initialValues={{
          title: data?.title,
          desc: data?.desc,
          slug: data?.slug,
        }}
        enableReinitialize
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <FormikTextField name="title" />
            <FormikTextField name="slug" />
            <FormikTextField name="desc" type="textarea" />
            <Button type="submit">Save</Button>
          </Form>
        )}
      </Formik>
    </Row>
  );
}
