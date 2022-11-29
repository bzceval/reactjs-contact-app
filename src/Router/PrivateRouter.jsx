import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import {InfoContext} from '../context/ContextProvider'

const PrivateRouter = () => {
    const {user} = useContext(InfoContext)

  return (
    user ? <Outlet /> : <Navigate to="/login"/>
  )
  
}

export default PrivateRouter