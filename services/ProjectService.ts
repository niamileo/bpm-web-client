import http from "services/httpService";

export const fetchProjects = (params?: FetchProjectsProps) =>
  http.get("projects", { params });

export const fetchProjectById = ({ id }: FetchProjectByIdProps) =>
  http.get(`project/${id}`);

export const createProject = (data: CreateProjectsProps) =>
  http.post("project/create", data);
