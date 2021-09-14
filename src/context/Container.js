import React, { useState } from 'react'
import MyContext from './MyContext'

const Container = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState(null);
  const [pet, setPet] = useState({});
  const [petId, setPetId] = useState(null);
  const [filteredData, setFilteredData] = useState([])


  return (
    <MyContext.Provider value={{ login, setLogin, user, setUser, userId, setUserId, pet, setPet, petId, setPetId,filteredData, setFilteredData }}>
      {children}
    </MyContext.Provider>
  )
}

export default Container
