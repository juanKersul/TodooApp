import axios from "axios";
const API_URL = "http://localhost:3000/api/todoo/";

const getAll = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const create = async (data) => {
  const response = await axios.post(API_URL, data);
  return response.data;
};

const update = async (id, data) => {
  const response = await axios.put(API_URL + id, data);
  return response.data;
};

const change = async (id, data) => {
  const response = await axios.patch(API_URL + id, data);
  return response.data;
};

const remove = async (id) => {
  const response = await axios.delete(API_URL + id);
  return response.data;
};

export default { getAll, create, update, change, remove };
