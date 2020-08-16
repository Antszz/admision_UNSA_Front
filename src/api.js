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

function getAulas() {
  return axios.get(`${API}/aulas/`, {});
}
function postAula(rol) {
  return axios.post(`${API}/aulas/`, rol);
}
function putAula(rol, id) {
  return axios.put(`${API}/aulas/${id}`, rol);
}
function deleteAula(id) {
  return axios.delete(`${API}/aulas/${id}`);
}

function getPabellones() {
  return axios.get(`${API}/pabellones/`, {});
}
function postPabellon(rol) {
  return axios.post(`${API}/pabellones/`, rol);
}
function putPabellon(rol, id) {
  return axios.put(`${API}/pabellones/${id}`, rol);
}
function deletePabellon(id) {
  return axios.delete(`${API}/pabellones/${id}`);
}

export default {
  getRoles,
  postRol,
  putRol,
  deleteRol,
  getAulas,
  postAula,
  putAula,
  deleteAula,
  getPabellones,
  postPabellon,
  putPabellon,
  deletePabellon
};
