import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Seats from './Seats';

export default function SeatArena() {
    const [changeView, setChangeView] = useState(true);


  const handleView = () => {
      changeView = <Seats/> 
      setChangeView(!changeView)
    }
  return (
    <div className="seatPage" >

    <div className='seat-container'>
       <Link to={"/arenaSeats/seats"}><div  className="seat-column-1">SEKT 1</div></Link>
       <div className="seat-column-2">
       <div className='seat-middle-column-1'>SCEN</div>
       <div className='seat-middle-column-2'>STÅ</div>
       <Link to={"/arenaSeats/seats"}><div className='seat-middle-column-3'>SEKT 3</div></Link>
       </div>
       <Link to={"/arenaSeats/seats"}><div className="seat-column-3">SEKT 2</div></Link>
    </div>
   </div>
  )
}
