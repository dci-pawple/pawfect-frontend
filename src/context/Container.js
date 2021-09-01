import React, { useState } from "react";
import { MyContext } from "./MyContext";

const Container = ({ children }) => {
  return <MyContext.Provider value={{}}>{children}</MyContext.Provider>;
};

export default Container;
