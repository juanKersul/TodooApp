import axios from "axios";
const API_URL = "http://localhost:3000/api/todoo/";

const getAll = async (token) => {
  const headers = {
    Authorization: token,
  };
  const response = await axios.get(API_URL, { headers });
  return response.data;
};

const create = async (token, data) => {
  const headers = {
    Authorization: token,
  };
  const response = await axios.post(API_URL, data, { headers });
  return response.data;
};

const update = async (token, id, data) => {
  const headers = {
    Authorization: token,
  };
  const response = await axios.put(API_URL + id, data, { headers });
  return response.data;
};

const change = async (token, id, data) => {
  const headers = {
    Authorization: token,
  };
  const response = await axios.patch(API_URL + id, data, { headers });
  return response.data;
};

const remove = async (token, id) => {
  const headers = {
    Authorization: token,
  };
  const response = await axios.delete(API_URL + id, { headers });
  return response.data;
};

export default { getAll, create, update, change, remove };
