import React from 'react'
import { Navigate } from 'react-router-dom'

function Home() {
  const loggedIn = localStorage.getItem('loggedIn')
  return (
    <>
    <div>
    {!loggedIn && <Navigate to="/login" replace={true} />}
    <div>Home</div>
    </div>
    </>
    
  )
}

export default Home