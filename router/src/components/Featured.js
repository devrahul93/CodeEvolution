import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Clothe from './Clothe'
import Mobile from './Mobile'

const Featured = () => {
  return (
    <div>
      <center>Featured Products</center>
      <section style={{ margin: '2em' }}>
        <Link to="cloth" style={{ margin: '2em' }}>
          Cloth
        </Link>
        <Link to="mobile" style={{ margin: '2em' }}>
          Mobile
        </Link>
      </section>
      <Outlet />
    </div>
  )
}

export default Featured
