import axios from "axios";

const fetcher = axios.create({
  baseURL: "https://airbnbnew.cybersoft.edu.vn/api",
  headers: {
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MiIsIkhldEhhblN0cmluZyI6IjI4LzAyLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwOTA3ODQwMDAwMCIsIm5iZiI6MTY4MTE0NjAwMCwiZXhwIjoxNzA5MjI2MDAwfQ.GboZ7OZlrOvJ_T6lEZ9PfGJD8vygDn30BxaLgB43WbM",
  },
});

fetcher.interceptors.response.use(
  (response) => {
    return response.data.content;
  },
  (error) => {
    return error;
  }
);

fetcher.interceptors.request.use(
  (config) => {
    const { token } = JSON.parse(localStorage.getItem("user")) || {};

    if (token) {
      // config.headers.token = `Bearer ${token}`;
      config.headers.token = token;
    }

    return config;
  },
  (error) => {
    return error;
  }
);

export default fetcher;
