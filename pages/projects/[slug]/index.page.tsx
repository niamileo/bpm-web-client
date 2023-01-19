// ** Hooks
import useHttp from "hooks/use-http";
import { useRouter } from "next/router";
// ** Components
import PageHeader from "components/partials/PageHeader";
import { Button, Nav, Row } from "reactstrap";
// ** Services
import { fetchProjectById } from "services/ProjectService";

export default function ProjectDashboard() {
  const router = useRouter();
  const { data } = useHttp(fetchProjectById, { id: router.query.id }, {});

  return (
    <Row>
      <PageHeader
        title={data.length && data[0].title}
        pretitle="Project Dashboard"
      />
      <Nav className="mb-5">
        <Button color="info" className="btn-pill ms-2" outline>
          General
        </Button>
        <Button color="info" className="btn-pill ms-2" outline>
          Users
        </Button>
        <Button color="info" className="btn-pill ms-2" outline>
          Tasks
        </Button>
      </Nav>
    </Row>
  );
}
