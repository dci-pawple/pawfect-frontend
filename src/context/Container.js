import React, { useState } from "react";
import MyContext from "./MyContext";

const Container = ({ children }) => {
  const [login, setLogin] = useState(
    localStorage.getItem("user") ? true : false
  );
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [userId, setUserId] = useState(login ? user._id : false);
  const [pet, setPet] = useState({});
  const [petId, setPetId] = useState(null);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [filteredData, setFilteredData] = useState([]);

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
        currentUser,
        setCurrentUser,
        users,
        setUsers,
        filteredData,
        setFilteredData,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default Container;
