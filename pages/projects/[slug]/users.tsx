import Datatable from "components/widgets/Datatable";
import useHttp from "hooks/use-http";
import { Col, Row } from "reactstrap";
import { fetchProjectMembers } from "services/ProjectService";

export default function Users() {
  // const {
  //   data: [],
  // } = useHttp<ProjectMembers[]>(fetchProjectMembers, {}, true);

  return (
    <Row>
      <Col sm={12}>
        <Datatable
          rows={[]}
          columns={[
            { name: "id" },
            { name: "title" },
            { name: "desc" },
            { name: "type" },
          ]}
        />
      </Col>
    </Row>
  );
}
