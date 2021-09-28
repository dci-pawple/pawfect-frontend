import axios from "axios";

export const createUser = async (data, successFunc) => {
  // const {
  //   data: { data },
  // } = await axios.get(`http://localhost:4000/users`);

  // console.log(data);

  // const users = data.map((user) => {
  //   return {
  //     secret: user.password,
  //     username: user.email,
  //     first_name: user.firstName,
  //     last_name: user.lastName,
  //   };
  // });
  // console.log(users);
  // julia: 7986b4e1-3edf-4f9c-abfd-2d97fb44f4ae
  // dusan: 11471710-a880-47c3-a09b-9fcab1ef3e64
  axios
    .post(`https://api.chatengine.io/users/`, data, {
      headers: { "Private-Key": "7986b4e1-3edf-4f9c-abfd-2d97fb44f4ae" },
    })
    .then((response) => {
      successFunc(response.data);
      console.log(response.data);
    })
    .catch((error) => {
      console.log("Create chat user", error.response);
    });
};

createUser();
