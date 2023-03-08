import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navigation.css'

function navigation() {
  return (
    <div className='nav'>
      <Link to={'/'}>HOME</Link>
      <Link to={'/about'}>ABOUT</Link>
    </div>
  )
}

export default navigation