import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Seats from './Seats';



export default function SeatArena() {

  return (
    <div className="seatPage" >
    <div className='seat-container'>
      <ul className='seat-links'>
         <li>
            <div className="seat-column-1">

       <NavLink to={"/arenaSeats/seats"} className="seatLink" state={{section: "Section 1"}}>
         SEKT 1</NavLink>
            </div>
         </li>
         <li>
       <div className="seat-column-2">
       <div className='seat-middle-column-1'>SCEN</div>
       <div className='seat-middle-column-2'> <NavLink to ={"/paymentStand"} className="seatLink"> STÅ</NavLink></div>
       <div className='seat-middle-column-3'><NavLink to={"/arenaSeats/seats"} className="seatLink" state={{section: "Section 3"}}>SEKT 3</NavLink></div>
       </div>

         </li>

         <li>

         <div className="seat-column-3">
       <NavLink to={"/arenaSeats/seats"} className="seatLink" state={{section: "Section 2"}}>SEKT 2</NavLink>
       </div>
         </li>
         </ul>
    </div>
   </div>
  )
} 