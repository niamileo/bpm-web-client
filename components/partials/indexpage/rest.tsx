import { Row, Col } from "reactstrap";
import Alot from "./Alot";
import First from "./first";
import Forth from "./forth";
import Second from "./second";
import Third from "./third";

export default function IndexRest() {
  return (
    <Row className="row-deck row-cards">
      <First />

      <Second />

      <Third />

      <Forth />

      <Alot />
    </Row>
  );
}
