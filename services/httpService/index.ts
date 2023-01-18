import axios from "axios";

export const BASE_URL = "http://localhost:8000";

export const apiUrlV1 = `${BASE_URL}`;

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.baseURL = apiUrlV1;
axios.defaults.withCredentials = true;
axios.interceptors.response.use(null, (error) => {
  // prettier-ignore
  const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;

  if (!expectedError) {
    console.log("logging the error", error.response);
  }

  return Promise.reject(error);
});

axios.interceptors.request.use(function (config) {
  const url = config.url;

  // ** removing trailing slash from end of url
  // ** this little slash (which seems its called trailing), causes CORS error
  const lastChar = url[url.length - 1];
  if (lastChar === "/") {
    config.url = config.url.replace(/\/$/, "");
  }
  return config;
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
