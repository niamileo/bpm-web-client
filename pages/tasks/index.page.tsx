import { Col, Row } from "reactstrap";
import GalleryCard from "../../components/widgets/GalleryCard";

const dummy_tasks = [
  {
    id: 1,
    title: "task 1",
    desc: "task 1 description",
  },
  {
    id: 2,
    title: "task 2",
    desc: "task 2 description",
  },
];

export default function Tasks() {
  return (
    <Row>
      {dummy_tasks.map((task, index) => (
        <Col sm={3}>
          <GalleryCard
            key={index}
            title={task.title}
            subtitle={task.desc}
            href={`/tasks/${task.id}`}
          />
        </Col>
      ))}
    </Row>
  );
}
