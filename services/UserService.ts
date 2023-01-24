import http from "services/httpService";

export const fetchUsers = (params?: FetchUsersParams) =>
  http.get("users", { params });

export const createUser = (data: CreateUserParams) =>
  http.post("user/create", data);
