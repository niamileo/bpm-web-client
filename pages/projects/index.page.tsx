// ** Hooks
import useHttp from "hooks/use-http";
// ** Partials
import PageHeader from "components/partials/PageHeader";
// ** Components
import Link from "next/link";
import { Button, Col, Row } from "reactstrap";
import GalleryCard from "components/widgets/GalleryCard";
import PlusIcon from "components/SVG/Plus.svg";
// ** Services
import { fetchProjects } from "services/ProjectService";

export default function Projects() {
  const { data = [] } = useHttp<Project[]>(fetchProjects);

  return (
    <Row>
      <PageHeader title="Projects List">
        <Link href={"/projects/form"}>
          <Button color="primary">
            <PlusIcon />
            New Project
          </Button>
        </Link>
      </PageHeader>
      {data.map((project, index) => (
        <Col sm={3} key={index} className="mt-3">
          <GalleryCard
            key={index}
            title={project.title}
            subtitle={project.desc}
            href={`/projects/${project.slug}?id=${project.id}`}
          />
        </Col>
      ))}
    </Row>
  );
}
