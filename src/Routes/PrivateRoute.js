import React from 'react'
import { Navigate } from 'react-router-dom'

const Private = ({isAuth}) => {
  return (
    <div>
      isAuth ? <outlet /> : <Navigate to="/login"/>
    </div>
  )
}

export default Private
