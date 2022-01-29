import axios from "axios";

import { TOKEN_ID } from "../../utils/constants";

const apiUrl = "http://localhost:5000/api/tasks";

export function getTasks() {
  return axios.get(apiUrl, {
    headers: {
      "Content-type": "application/json",
      "x-auth-token": `${localStorage.getItem(TOKEN_ID)}`,
    },
  });
}

export function addTask(task) {
  console.log(localStorage.getItem(TOKEN_ID));
  return axios.post(apiUrl, task, {
    headers: {
      "Content-type": "application/json",
      "x-auth-token": `${localStorage.getItem(TOKEN_ID)}`,
    },
  });
}

export function updateTask(id, task) {
  return axios.put(apiUrl + "/" + id, task, {
    headers: {
      "Content-type": "application/json",
      "x-auth-token": `${localStorage.getItem(TOKEN_ID)}`,
    },
  });
}

export function deleteTask(id) {
  return axios.delete(apiUrl + "/" + id, {
    headers: {
      "Content-type": "application/json",
      "x-auth-token": `${localStorage.getItem(TOKEN_ID)}`,
    },
  });
}
