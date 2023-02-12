import FormikTextField from "components/form/TextField/formik";
import PageHeader from "components/partials/PageHeader";
import { Form, Formik } from "formik";
import Router, { useRouter } from "next/router";
import { toast } from "react-toastify";
import { Button, Card, CardBody, Row } from "reactstrap";
import { createTask } from "services/TaskService";



export default function TaskForm(){
    let router=useRouter();
    let project_id=Number(router.query.id);
    const handleSubmit=(data:object)=>{
        createTask({...data,project_id}).then(()=>{
            toast.success("Task Created Successfully");
            Router.push('/projects/'+router.query.slug+'?id='+router.query.id+'&mode=tasks');
        }).catch();
    }
    return(
        <Row>
            <PageHeader title="Task Form"/>
            <Card>
                <CardBody>
                    <Formik initialValues={{}} onSubmit={handleSubmit}>
                        {({values})=>(
                            <Form>
                                <FormikTextField name="title" label="Title"/>
                                <FormikTextField name="desc" label="Description" type="textarea"/>
                                <FormikTextField name="state" label="State"/>
                                <FormikTextField name="type" label="Type"/>
                                <Button type="submit">Create</Button>
                            </Form>
                        )}
                    </Formik>
                </CardBody>
            </Card>
        </Row>
    );
}