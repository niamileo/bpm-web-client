type FetchProjectsProps = {};

type FetchProjectByIdProps = {
  id?: string | number;
};

type CreateProjectsProps = {
  title?: string;
  desc?: string;
};

type UpdateProjectProps = CreateProjectsProps & {
  id: string | number;
};
type FetchTasksProps = {};

type FetchProjectMembersParams = {};

type FetchUsersParams = {};

type CreateUserParams = {
  first_name?: string;
  last_name?: string;
  email?: string;
  username?: string;
};
