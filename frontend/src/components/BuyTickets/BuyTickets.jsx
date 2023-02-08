import React, { useState } from "react";
import { useEffect } from "react";
import "./BuyTickets.css";

export default function BuyTicketsStand({ quantity }) {
  const [ticketQuantity, setTicketQuantity] = useState("");
  const [totalCost, setTotalCost] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  function handleQuantityChange(e) {
    setTicketQuantity(e.target.value);
    setTotalCost(e.target.value * 10);
  };

  function handleBuyNow() {
    if (quantity > 0) {
      setShowNotification(true);
      setTicketQuantity(0);
      setTotalCost(0);
    }

  };

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  return (
    <div className="buy-tickets-page">
      <h1>Buy Tickets</h1>
      <div className="ticket-quantity">
        <label>Ticket Quantity: {quantity}</label>
      </div>
      <div className="total-cost">
        <label>Total Cost: ${quantity * 10}</label>
      </div>
      <div>
        <button className="buy-now-button" onClick={handleBuyNow}>Buy Now</button>
        {showNotification && (
          <div className="notification">
            <p>Ticket purchased successfully!</p>
            <button onClick={handleCloseNotification}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
}
