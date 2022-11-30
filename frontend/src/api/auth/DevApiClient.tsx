
import axios from "axios"

const cookies = document.cookie.split("; ");
const cookie = cookies.find((_) => _.startsWith("XSRF-TOKEN")) || "";
const csrfToken = decodeURIComponent(cookie.split("=")[1]);

const apiClient = axios.create({
  baseURL: 'http://localhost:80',
  withCredentials: true,
  
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-XSRF-TOKEN": csrfToken,
  },
});

export default apiClient