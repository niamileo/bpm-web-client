import http from "services/httpService";

export const fetchProjects = (params?: FetchProjectsProps) =>
  http.get("projects", { params });

export const fetchProjectById = ({ id }: FetchProjectByIdProps) =>
  http.get(`project/${id}`);

export const createProject = (data: CreateProjectsProps) =>
  http.post("project/create", data);

export const updateProject = ({ id, ...data }: UpdateProjectProps) =>
  http.put(`project/update/${id}`, data);

// ----------------------------- project member
export const fetchProjectMembers = (params?: FetchProjectMembersParams) =>
  http.get("project/members", { params });

export const createProjectMember = (data: createProjectMember) =>
  http.post("project/member/create", data);
