import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export const extractDataFromTextService = async (file, domain) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("domain", domain);

  const response = await api.post("/extract-data-from-text", formData);
  return response.data;
};
