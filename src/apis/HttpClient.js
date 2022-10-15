import axios from "axios";

const HttpClient = axios.create({
  // baseURL: "http://18.185.66.214:5000/api/v1",
  baseURL: "http://127.0.0.1:5000/api/v1",
  headers: { "Content-Type": "application/json" },
});

export default HttpClient;
