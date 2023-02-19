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
type createProjectMember = {
  project_id?: number|any,
  user_id?: number,
  role_id?: number
};

type FetchUsersParams = {};

type CreateUserParams = {
  first_name?: string;
  last_name?: string;
  email?: string;
  username?: string;
};

type CreateTaskProps = {
  title?: string;
  desc?: string;
  state?: string;
  project_id?: number|any
}