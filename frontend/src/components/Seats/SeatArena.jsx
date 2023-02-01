import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Seats from './Seats';



export default function SeatArena() {

  return (
    <div className="seatPage" >

    <div className='seat-container'>
       <NavLink to={"/arenaSeats/seats"} state={{section: "Sektion 1"}}><div className="seat-column-1">SEKT 1</div></NavLink>
       <div className="seat-column-2">
       <div className='seat-middle-column-1'>SCEN</div>
       <div className='seat-middle-column-2'>STÅ</div>
       <NavLink to={"/arenaSeats/seats"} state={{section: "Sektion 3"}}><div className='seat-middle-column-3'>SEKT 3</div></NavLink>
       </div>
       <NavLink to={"/arenaSeats/seats"} state={{section: "Sektion 2"}}><div className="seat-column-3">SEKT 2</div></NavLink>
    </div>
   </div>
  )
}
