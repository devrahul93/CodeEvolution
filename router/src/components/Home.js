import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const btn = {
    margin: '2em',
    padding: '0.5em 2em',
    borderRadius: '20px',
    border: 'none',
    background: 'violet',
  }

  const navigate = useNavigate()
  return (
    <>
      <h2>Home</h2>
      {/* //Go back button will replace to browser */}
      <button
        style={btn}
        onClick={() => navigate('order-summary', { replace: true })}
      >
        Order
      </button>
    </>
  )
}

export default Home
