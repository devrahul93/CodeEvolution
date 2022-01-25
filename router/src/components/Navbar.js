import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline',
    }
  }

  return (
    <nav>
      {/* link is like an anchor tag and to is like href*/}
      <NavLink style={navLinkStyles} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkStyles} to="/about">
        About
      </NavLink>
      <NavLink style={navLinkStyles} to="/contact">
        Contact
      </NavLink>
      <NavLink style={navLinkStyles} to="/products">
        Products
      </NavLink>
    </nav>
  )
}

export default Navbar
