import React, { useState } from "react";
import MyContext from "./MyContext";

const Container = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState(null);


  return (
    <MyContext.Provider value={{ login, setLogin, user, setUser, userId, setUserId }}>
      {children}
    </MyContext.Provider>
  );
};

export default Container;
