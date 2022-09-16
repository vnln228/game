import React from 'react'
import { Navigate } from 'react-router-dom'

const GamePage = () => {
  return (
    <div className='game_started'>
      <Navigate to='/login'/>
    </div>
  )
}

export default GamePage
