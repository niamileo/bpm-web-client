import http from "services/httpService";

export const fetchTasks = (params?: FetchTasksProps) =>
  http.get("tasks", { params });


  export const createTask=(data?:CreateTaskProps)=>http.post('task/create',data)