import axios from "axios";

const BASE_URL = "https://connections-api.goit.global/";

const api = axios.create({
  baseURL: BASE_URL,
});

const setAuthHeader = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const resourcesApi = (resource) => {
  return {
    getAll: () => api.get(`${resource}`),
    create: (data) => api.post(`${resource}`, data),
    update: (id, data) => api.patch(`${resource}/${id}`, data),
    delete: (id) => api.delete(`${resource}/${id}`),
  };
};

const contactsApi = resourcesApi("contacts");

const userApi = {
  signup: async (data) => {
    const response = await api.post("/users/signup", data);
    setAuthHeader(response.data.token);
    return response;
  },
  login: async (data) => {
    const response = await api.post("/users/login", data);
    setAuthHeader(response.data.token);
    return response;
  },
  logout: async () => {
    await api.post("/users/logout");
    setAuthHeader(null);
  },
};

export { contactsApi, userApi };
