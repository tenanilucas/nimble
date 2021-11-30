import axios from "axios";

const api = axios.create({
  baseURL: "https://vdob2n-hom-protheus.totvscloud.com.br:24387/",
  timeout: 30000,
});

api.interceptors.request.use(async (config) => {
  try {
    const token = localStorage.getItem("@token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  } catch (err) {
    console.error(err);
  }
});

export default api;
