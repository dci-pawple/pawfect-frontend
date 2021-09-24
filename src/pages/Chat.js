import React, { useContext, useEffect, useState } from "react";
import { ChatEngine, ChatFeed, editChat } from "react-chat-engine";
import { createUser } from "../chat/createUser";
import { getUsers } from "../chat/getUser";
import MyContext from "../context/MyContext";
import axios from "axios";
import { getOrCreateChat } from "../chat/getOrCreateChat";

export default function Chat() {
  const { setUsers, user, chatUsername, petOwner } = useContext(MyContext);
  const [chat, setChat] = useState(null);
  const [headers, setHeaders] = useState({
    "Project-ID": "b095d165-217e-4a79-b190-6fb4706e857a",
    "User-Name": user.email,
    "User-Secret": user.password,
  });

  function syncUsers() {
    getUsers(async (users) => {
      // console.log("Fetched users", users);

      const {
        data: { data },
      } = await axios.get(`http://localhost:4000/users`);

      const people = data.map((person) => {
        return {
          secret: person.password,
          username: person.email,
          first_name: person.firstName,
          last_name: person.lastName,
        };
      });
      console.log("people", people);
      people.map((person) => {
        if (!users.find((user) => person.username === user.username)) {
          createUser(person);
        }
      });
      setUsers(users);
    });
  }

  useEffect(() => {
    //   if (!didMountRef.current) {
    //       didMountRef.current = true;
    syncUsers();
    //   }
  }, []);

  const chatUser = {
    secret: user.password,
    username: user.email,
    first_name: user.firstName,
  };

  useEffect(() => {
    // if (!didMountRef.current) {
    //     didMountRef.current = true

    const data = {
      usernames: [chatUser.username, chatUsername],
      is_direct_chat: true,
    };
    getOrCreateChat(headers, data, (chatArg) => {
      console.log("this is chat", chat);
      console.log("this is chatArg", chatArg);

      if (chat.id !== chatArg.id) setChat(chatArg);
    });

    // }
  }, [chat, chatUsername, petOwner]);

  // const userLocalStorage = JSON.parse(localStorage.getItem("user"));

  console.log("chat user", chatUser);

  // change title of chat
  // useEffect(() => {
  //   let isFirstRender = true;
  //   if (isFirstRender) {
  //     isFirstRender = false;
  //   } else {
  //     const authObject = headers;
  //     const chatID = chat && chat.id;
  //     console.log("chatid", chatID);
  //     const chatObject = { title: petOwner && petOwner.firstName };
  //     // const callback = (data) => console.log(data);
  //     // editChat(authObject, chatID, chatObject);
  //   }
  // }, [chat]);

  return (
    <div className="app-container container">
      <div className="chat-container">
        {/* <ChatEngineWrapper>
          <Socket
            projectID="b095d165-217e-4a79-b190-6fb4706e857a"
            userName={chatUser.username}
            userSecret={chatUser.secret}
          />
          <ChatList />

          <ChatFeed activeChat={chat && chat.id} />
        </ChatEngineWrapper> */}

        <ChatEngine
          projectID="b095d165-217e-4a79-b190-6fb4706e857a"
          offset={2}
          userName={chatUser.username}
          userSecret={chatUser.secret}
          renderChatFeed={(chatAppState) => {
            return <ChatFeed activeChat={chat && chat.id} />;
          }}
        />
      </div>
    </div>
  );
}
