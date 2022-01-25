import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (
    <>
      <h2>Home</h2>
      {/* //Go back button will replace to browser */}
      <button onClick={() => navigate('order-summary', { replace: true })}>
        Order
      </button>
    </>
  )
}

export default Home
