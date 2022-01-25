import React from 'react'
import { Link, Outlet } from 'react-router-dom'

let input = {
  color: '#000000',
  padding: '0.5em',
  border: 'none',
  marginTop: '1em',
  border: '2px solid green',
  borderRadius: '20%',
  aspectRatio: '5/1',
}

let link = {
  textDecoration: 'none',
  padding: '2em',
}

const Products = () => {
  return (
    <div>
      <center>
        <h3>Products</h3>
        <input style={input} placeholder="Search for products" type="search" />
      </center>
      <section style={{ margin: '2em' }}>
        <Link style={link} to="feature">
          Featured Products
        </Link>
        <Link style={link} to="newProduct">
          New Products
        </Link>
      </section>
      <Outlet />
    </div>
  )
}

export default Products
