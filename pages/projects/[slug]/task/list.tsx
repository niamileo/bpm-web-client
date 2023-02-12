import PageHeader from "components/partials/PageHeader";
import GalleryCard from "components/widgets/GalleryCard";
import useHttp from "hooks/use-http";
import Link from "next/link";
import { Button, Col, Row } from "reactstrap";
import { fetchTasks } from "services/TaskService";
import PlusIcon from "components/SVG/Plus.svg";
import { useRouter } from "next/router";


export default function Tasks() {
  let router = useRouter()
  const { data = [] } = useHttp<Task[]>(fetchTasks, {}, true);
  console.log(router.query.slug)
  return (
    <Row>
      <PageHeader>
        <Link
          style={{ textDecoration: "none" }}
          href={{
            href: `/projects`,
            query: {
              id: router.query.id,
              slug: router.query.slug,
              mode: "task-form",
            },
          }}
        >
          <Button>
            <PlusIcon />
            New Task
          </Button>
        </Link>
      </PageHeader>

      {data.map((task, index) => (
        <Col sm={3} key={index} className="mt-3">
          <GalleryCard
            key={index}
            title={task.title}
            subtitle={task.desc}
          />
        </Col>
      ))}
    </Row >
  )
}