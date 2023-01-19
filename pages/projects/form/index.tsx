import FormikTextField from "components/form/TextField/formik";
import PageHeader from "components/partials/PageHeader";
import { Form, Formik } from "formik";
import { Button, Card, CardBody, Row } from "reactstrap";
import { createProject } from "services/ProjectService";

export default function ProjectForm() {
  const handleSubmit = (data: object) => {
    createProject(data);
  };

  return (
    <Row>
      <PageHeader title="Project Form" />
      <Card>
        <CardBody>
          <Formik initialValues={{}} onSubmit={handleSubmit}>
            {({ values }) => (
              <Form>
                <FormikTextField name="title" label="Title" />
                <FormikTextField name="slug" label="Slug" />
                <FormikTextField
                  name="desc"
                  label="Description"
                  type="textarea"
                />
                <Button type="submit">Create</Button>
              </Form>
            )}
          </Formik>
        </CardBody>
      </Card>
    </Row>
  );
}
