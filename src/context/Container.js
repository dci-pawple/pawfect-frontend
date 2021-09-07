import React, { useState } from "react";
import  MyContext from "./MyContext";


const Container = ({ children }) => {
  const [login,setLogin]=useState(false);

  return <MyContext.Provider value={{login,setLogin}}>{children}</MyContext.Provider>;
};

export default Container;
