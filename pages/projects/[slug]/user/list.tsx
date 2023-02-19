import PageHeader from "components/partials/PageHeader";
import GalleryCard from "components/widgets/GalleryCard";
import useHttp from "hooks/use-http";
import Link from "next/link";
import { Button, Col, Row } from "reactstrap";
import { fetchTasks } from "services/TaskService";
import PlusIcon from "components/SVG/Plus.svg";
import { useRouter } from "next/router";
import { fetchUsers } from "services/UserService";
import { fetchProjectMembers } from "services/ProjectService";


export default function Users() {
  let router = useRouter()
  const { data = [] } = useHttp<User[]>(fetchProjectMembers, {}, true);
  return (
    <Row>
      <PageHeader>
        <Link
          style={{ textDecoration: "none" }}
          href={{
            href: `/users`,
            query: {
              id: router.query.id,
              slug: router.query.slug,
              mode: "user-form",
            },
          }}
        >
          <Button>
            <PlusIcon />
            New User
          </Button>
        </Link>
      </PageHeader>

      {data.map((user, index) => (
        <Col sm={3} key={index} className="mt-3">
          <GalleryCard
            key={index}
            title={user.first_name+' '+user.last_name}
            subtitle={user.email}
          />
        </Col>
      ))}
    </Row >
  )
}