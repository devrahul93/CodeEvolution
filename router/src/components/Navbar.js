import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      {/* link is like an anchor tag and to is like href*/}
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  )
}

export default Navbar
