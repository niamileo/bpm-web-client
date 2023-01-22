import http from "services/httpService";

export const fetchTasks = (params?: FetchTasksProps) =>
  http.get("tasks", { params });
