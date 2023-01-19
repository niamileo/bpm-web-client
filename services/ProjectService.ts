import http from "services/httpService";

type FetchProjectsProps = {};

type CreateProjectsProps = {
  title?: string;
  desc?: string;
};

export const fetchProjects = (params?: FetchProjectsProps) =>
  http.get("projects", { params });

export const createProject = (data: CreateProjectsProps) =>
  http.post("project/create", data);
