import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
      <Link to="/">Home</Link>
      <Link to="/detail">Detail</Link>
    </nav>
  )
}

export default Navbar