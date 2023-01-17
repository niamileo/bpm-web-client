import Plus from "components/SVG/Plus.svg";
import { Button, Col } from "reactstrap";

export default function Kapak() {
  return (
    <div className="page-header d-print-none">
      <div className="row align-items-center">
        <Col>
          <div className="page-pretitle">Overview</div>
          <h2 className="page-title">Fluid vertical layout</h2>
        </Col>
        <div className="col-auto ms-auto d-print-none">
          <div className="btn-list">
            <span className="d-none d-sm-inline">
              <Button color="white">New View</Button>
            </span>
            <Button color="primary">
              <Plus />
              Create new report
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
