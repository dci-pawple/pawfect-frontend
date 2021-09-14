import axios from "axios";

export const getUsers = (successFunc) => {
  axios
    .get(`https://api.chatengine.io/users/`, {
      headers: { "Private-Key": "7986b4e1-3edf-4f9c-abfd-2d97fb44f4ae" },
    })

    .then((response) => {
      successFunc(response.data);
    })

    .catch((error) => {
      console.log("Create chat user", error.response);
    });
};
