import axios from "axios";

export const baseUrl: string =
  import.meta.env.REACT_APP_API_URL ?? "http://localhost:8080";

const api = axios.create({
  baseURL: baseUrl,
});

export default api;
