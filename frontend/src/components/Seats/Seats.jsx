import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router';
import BuyTickets from '../BuyTickets/BuyTickets';
import { useLocation } from 'react-router';
import "./Seats.css";
import { BsColumns } from 'react-icons/bs';


const Seats = () => {

  let location = useLocation()
  const [seatArray, setSeatArray] = useState([])
  const letters=['A','B','C','D','E','F']
  const rows=[1,2,3,4,5,6,7,8,9,10]
  const [quantity,setQuantity]=useState(0)

useEffect(()=>{
console.log(quantity)
},[quantity])
  return (
    <div className="seatBody">
      <div className="container">
        <h1>Select Seats</h1>
        <h2>{location.state.section}</h2>
        <ol className="sideLine">
          {rows.map(row => (
            <li className={`row row--${row}`}>
              <ol className="seats" type="A">
                {letters.map(letter => (

                  <li className="seat">
                    <input type="checkbox" onChange={(e) => setQuantity(e.target.checked?quantity+1:quantity-1)} id={row+letter} />
                    <label for={row + letter}>{row + letter}</label>
                  </li>
                ))}
              </ol>

            </li>
          ))}
        </ol>
      </div>
      
      <BuyTickets quantity={quantity} />
    </div>
  );
}

export default Seats 