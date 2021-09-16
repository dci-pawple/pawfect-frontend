import React, { useState } from "react";
import MyContext from "./MyContext";

const Container = ({ children }) => {
  const [login, setLogin] = useState(
    localStorage.getItem("user") ? true : false
  );
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [userId, setUserId] = useState(
    JSON.parse(localStorage.getItem("userId"))
  );
  const [pet, setPet] = useState({});
  const [petId, setPetId] = useState(null);
  const [users, setUsers] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [chatUsername, setChatUsername] = useState("");

  return (
    <MyContext.Provider
      value={{
        login,
        setLogin,
        user,
        setUser,
        userId,
        setUserId,
        pet,
        setPet,
        petId,
        setPetId,
        users,
        setUsers,
        filteredData,
        setFilteredData,
        chatUsername,
        setChatUsername,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default Container;
