import api from "../../axiosApi/api";

export const fetchAll = async (data) => {
  try {
    const response = await api.get(data);
    return response.data;
  } catch (error) {
    console.error("An error occur during GET /users request", error);
  }
};

export const fetchById = async (path, id) => {
  try {
    const response = await api.get(`${path}/${id}`);
    return response.data;
  } catch (error) {}
};

export const createData = async (path, newData) => {
  const response = await api.post(`${path}`, newData);
  return response.data;
};

export const updateData = async (path, newData) => {
  const response = await api.put(`${path}/${newData.id}`, newData);
  return response.data;
};

export const deleteDataById = async (path, id) => {
  const response = api.delete(`${path}/${id}`);
  return response.data;
};
