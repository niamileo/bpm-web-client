import PageHeader from "components/partials/PageHeader";
import Datatable from "components/widgets/Datatable";
import PlusIcon from "components/SVG/Plus.svg";
import useHttp from "hooks/use-http";
import Link from "next/link";
import { Button, Row } from "reactstrap";
import { fetchUsers } from "services/UserService";

export default function Users() {
  const { data = [] } = useHttp<User[]>(fetchUsers, {}, true);

  return (
    <Row>
      <PageHeader title="Projects List">
        <Link href={"/users/form"}>
          <Button color="primary">
            <PlusIcon />
            New User
          </Button>
        </Link>
      </PageHeader>
      <Datatable
        rows={data}
        columns={[
          { name: "id" },
          { name: "first_name" },
          { name: "last_name" },
          { name: "email" },
          { name: "username" },
        ]}
      />
    </Row>
  );
}
