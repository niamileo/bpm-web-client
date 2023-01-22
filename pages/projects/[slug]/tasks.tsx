import Datatable from "components/widgets/Datatable";
import useHttp from "hooks/use-http";
import { Col } from "reactstrap";
import { fetchTasks } from "services/TaskService";

export default function Tasks() {
  const { data = [] } = useHttp<Task[]>(fetchTasks, {}, true);

  return (
    <>
      <Col sm={12}>
        <Datatable
          rows={data}
          columns={[
            { name: "id" },
            { name: "title" },
            { name: "desc" },
            { name: "type" },
          ]}
        />
      </Col>
    </>
  );
}
