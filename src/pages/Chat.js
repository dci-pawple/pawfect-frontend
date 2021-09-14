import React, { useContext, useEffect } from "react";
import { ChatEngine } from "react-chat-engine";
import { createUser } from "../chat/createUser";
import { getUsers } from "../chat/getUser";
import MyContext from "../context/MyContext";
import axios from "axios";

export default function Chat() {
  const { currentUser, setCurrentUser, setUsers, user } = useContext(MyContext);

  function syncUsers() {
    getUsers(async (users) => {
      console.log("Fetched users", users);

      const {
        data: { data },
      } = await axios.get(`http://localhost:4000/users`);

      console.log(data);

      const people = data.map((person) => {
        return {
          secret: person.password,
          username: person.email,
          first_name: person.firstName,
          last_name: person.lastName,
        };
      });
      console.log(people);
      people.map((person) => {
        if (!users.find((user) => person.username === user.username)) {
          createUser(person);
        }
      });
      setUsers(users);

      setCurrentUser(user);
      console.log(user);
    });
  }

  useEffect(() => {
    //   if (!didMountRef.current) {
    //       didMountRef.current = true;
    syncUsers();
    //   }
  }, []);

  const userLocalStorage = JSON.parse(localStorage.getItem("user"));
  const chatUser = {
    secret: userLocalStorage.password,
    username: userLocalStorage.email,
    first_name: userLocalStorage.firstName,
  };

  console.log(chatUser);

  return (
    <div className="app-container container">
      <div className="chat-container">
        <ChatEngine
          projectID="b095d165-217e-4a79-b190-6fb4706e857a"
          userName={chatUser.username}
          userSecret={chatUser.secret}
        />
      </div>
    </div>
  );
}
