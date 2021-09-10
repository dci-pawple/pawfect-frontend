import React, { useState } from 'react'
import MyContext from './MyContext'

const Container = ({ children }) => {
  const [login, setLogin] = useState(false)
  const [user, setUser] = useState({})
  const [userId, setUserId] = useState(null)
  const [filteredData, setFilteredData] = useState([])

  return (
    <MyContext.Provider
      value={{ login, setLogin, user, setUser, userId, setUserId,filteredData, setFilteredData }}
    >
      {children}
    </MyContext.Provider>
  )
}

export default Container
