import React, { useState } from 'react'
import { useLocation } from 'react-router';
import "./Seats.css";
import BuyTicketsStand from '../BuyTickets/BuyTickets';


export default function Seats() {

  let location = useLocation()
  const letters = ['A', 'B', 'C', 'D', 'E', 'F']
  const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const [quantity, setQuantity] = useState(0)


  return (

    <div className="seats">
      <div className="seatselection">
        <h1>Select Seats</h1>
        <h2>{location.state.section}</h2>
        <ol className="sideline">
          {rows.map(row => (
            <li className={`row row--${row}`}>
              <ol className="seatplacement" type="A">
                {letters.map(letter => (

                  <li className="seat">
                    <input type="checkbox" onChange={(e) => setQuantity(e.target.checked ? quantity + 1 : quantity - 1)} id={row + letter} />
                    <label for={row + letter}>{row + letter}</label>
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
      </div>
      <div className='seatpayment'>
        <BuyTicketsStand quantity={quantity} />
      </div>
    </div>

  );
}
