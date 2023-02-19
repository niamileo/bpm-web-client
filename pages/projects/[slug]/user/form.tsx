import FormikTextField from "components/form/TextField/formik";
import PageHeader from "components/partials/PageHeader";
import { Form, Formik } from "formik";
import Router, { useRouter } from "next/router";
import { toast } from "react-toastify";
import { Button, Card, CardBody, Row } from "reactstrap";
import { createProjectMember } from "services/ProjectService";



export default function UserForm() {
    let router = useRouter();
    let project_id = (router.query.id);
    const handleSubmit = (data: object) => {
        createProjectMember({ ...data, project_id }).then(() => {
            toast.success("User add Project Successfully");
            Router.push('/projects/' + router.query.slug + '?id=' + router.query.id + '&mode=users');
        }).catch();
    }
    return (
        <Row>
            <PageHeader title="User Form" />
            <Card>
                <CardBody>
                    <Formik initialValues={{}} onSubmit={handleSubmit}>
                        {({ values }) => (
                            <Form>
                                <FormikTextField name="first_name" label="First Name" />
                                <FormikTextField name="last_name" label="Last Name" />
                                <FormikTextField name="email" label="Email" />
                                <FormikTextField name="title" label="role" />
                                <Button type="submit">Create</Button>
                            </Form>
                        )}
                    </Formik>
                </CardBody>
            </Card>
        </Row>
    );
}