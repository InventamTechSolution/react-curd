import axios from "axios";
export const getUser = () =>
  new Promise((resolve, reject) =>
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject({ message: `Something Went Wrong` });
      })
  );

export const addUser = (data) =>
  new Promise((resolve, reject) =>
    axios
      .post(`https://jsonplaceholder.typicode.com/users`, data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject({ message: `Something Went Wrong` });
      })
  );

export const updateUser = (id) =>
  new Promise((resolve, reject) =>
    axios
      .put(`https://jsonplaceholder.typicode.com/users/${id.id}`, id)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject({ message: `Something Went Wrong` });
      })
  );
