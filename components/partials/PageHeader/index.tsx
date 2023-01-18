import Plus from "components/SVG/Plus.svg";
import { Button, Col } from "reactstrap";

type PageHeaderProps = {
  title?: string;
  pretitle?: string;
  children?: any;
};

export default function PageHeader({
  children,
  title,
  pretitle,
}: PageHeaderProps) {
  return (
    <div className="page-header d-print-none">
      <div className="row align-items-center">
        <Col>
          <div className="page-pretitle">{pretitle}</div>
          <h2 className="page-title">{title}</h2>
        </Col>
        <div className="col-auto ms-auto d-print-none">
          <div className="btn-list">{children}</div>
        </div>
      </div>
    </div>
  );
}
