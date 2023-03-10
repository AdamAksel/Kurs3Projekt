import React, { useState } from 'react'
import './BuyTickets.css'
import image from './image.jpg'

export default function BuyTickets() {
  const [ticketQuantity, setTicketQuantity] = useState('')
  const [totalCost, setTotalCost] = useState(0)
  const [showNotification, setShowNotification] = useState(false)

  const handleQuantityChange = (e) => {
    setTicketQuantity(e.target.value)
    setTotalCost(e.target.value * 10)
  }

  const handleBuyNow = () => {
    if (ticketQuantity > 0) {
      setShowNotification(true)
      setTicketQuantity(0)
      setTotalCost(0)
    }
  }

  const handleCloseNotification = () => {
    setShowNotification(false)
  }

  return (
    <div className='tickets'>
      <h1>Buy Tickets</h1>
      <div class='ticketcount'>
        <div className='ticket-quantity'>
          <label>Ticket Quantity:</label>
          <input
            className='input_ticket'
            type='number'
            value={ticketQuantity}
            onChange={handleQuantityChange}
          />
          <label>Total Cost:</label>
          <p>${totalCost}</p>
        </div>
      </div>
      <button className='buy-now-button' onClick={handleBuyNow}>
        Buy Now
      </button>
      {showNotification && (
        <div className='notification'>
          <p>Ticket purchased successfully!</p>
          <button onClick={handleCloseNotification}>
            {' '}
            <a
              target='_blank'
              href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'
            >
              Close
            </a>
          </button>
        </div>
      )}
    </div>
  )
}
