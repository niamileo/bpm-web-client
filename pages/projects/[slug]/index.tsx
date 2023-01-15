import { Row } from "reactstrap";
import Chart from "../../../components/widgets/Chart";
import Tasks from "../../tasks";

export default function ProjectDashboard() {
  return (
    <Row>
      <h1>project dashboard</h1>
      <Chart />
      <Tasks />
    </Row>
  );
}
