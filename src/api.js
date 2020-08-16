import axios from "axios";
const API = "http://127.0.0.1:8000/api";

function getRoles() {
  return axios.get(`${API}/roles/`, {});
}
function postRol(rol) {
  return axios.post(`${API}/roles/`, rol);
}
function putRol(rol, id) {
  return axios.put(`${API}/roles/${id}`, rol);
}
function deleteRol(id) {
  return axios.delete(`${API}/roles/${id}`);
}

export default {
  getRoles,
  postRol,
  putRol,
  deleteRol
};
