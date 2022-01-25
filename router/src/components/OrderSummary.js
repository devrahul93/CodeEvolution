import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderSummary = () => {
  const navigate = useNavigate()

  return (
    <>
      <div>Order Placed!!</div>
      <button onClick={() => navigate('/')}>Continue Shopping</button>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  )
}

export default OrderSummary
