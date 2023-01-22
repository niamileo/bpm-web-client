// ** Hooks
import useHttp from "hooks/use-http";
import { useRouter } from "next/router";
// ** Components
import PageHeader from "components/partials/PageHeader";
import { Button, Nav, Row } from "reactstrap";
import Link from "next/link";
// ** Partials
import General from "./general";
import Tasks from "./tasks";
import Users from "./users";
// ** Services
import { fetchProjectById } from "services/ProjectService";

export default function ProjectDashboard() {
  const router = useRouter();
  const { data = [] } = useHttp<Project[]>(
    fetchProjectById,
    {
      id: router.query.id,
    },
    true
  );

  return (
    <Row>
      <PageHeader
        title={data.length && data[0].title}
        pretitle="Project Dashboard"
      />
      <Nav className="mb-5">
        <Link
          style={{ textDecoration: "none" }}
          href={{
            href: `/projects`,
            query: {
              id: router.query.id,
              slug: router.query.slug,
              mode: "general",
            },
          }}
        >
          <Button
            color="info"
            className="btn-pill ms-2"
            outline={router.query.mode !== "general"}
          >
            General
          </Button>
        </Link>
        <Link
          style={{ textDecoration: "none" }}
          href={{
            href: `/projects`,
            query: {
              id: router.query.id,
              slug: router.query.slug,
              mode: "tasks",
            },
          }}
        >
          <Button
            color="info"
            className="btn-pill ms-2"
            outline={router.query.mode !== "tasks"}
          >
            Tasks
          </Button>
        </Link>
        <Link
          style={{ textDecoration: "none" }}
          href={{
            href: `/projects`,
            query: {
              id: router.query.id,
              slug: router.query.slug,
              mode: "users",
            },
          }}
        >
          <Button
            color="info"
            className="btn-pill ms-2"
            outline={router.query.mode !== "users"}
          >
            Users
          </Button>
        </Link>
      </Nav>

      {router.query.mode === "general" && <General />}
      {router.query.mode === "tasks" && <Tasks />}
      {router.query.mode === "users" && <Users />}
    </Row>
  );
}
