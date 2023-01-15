import { Col, Row } from "reactstrap";
import GalleryCard from "../../components/widgets/GalleryCard";

const dummy_projects = [
  {
    title: "project 1",
    slug: "project_1",
    desc: "project 1 description",
  },
  {
    title: "project 2",
    slug: "project_2",
    desc: "project 2 description",
  },
];

export default function Projects() {
  return (
    <Row>
      {dummy_projects.map((project, index) => (
        <Col sm={3} key={index}>
          <GalleryCard
            key={index}
            title={project.title}
            subtitle={project.desc}
            href={`/projects/${project.slug}`}
          />
        </Col>
      ))}
    </Row>
  );
}
