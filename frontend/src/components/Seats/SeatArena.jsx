import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Seats from './Seats';



export default function SeatArena() {

  return (
    <div className='arena'>
      <ul className='sections'>
        <li>
          <div className="section1">

            <NavLink to={"/arenaSeats/seats"} className="seatLink" state={{ section: "Section 1" }}>
              SEKT 1</NavLink>
          </div>
        </li>
        <li>
          <div className="middlecolumn">
            <div className='scene'>SCEN</div>
            <div className='standing'> <NavLink to={"/paymentStand"} className="seatLink"> STÅ</NavLink></div>
            <div className='section2'><NavLink to={"/arenaSeats/seats"} className="seatLink" state={{ section: "Section 2" }}>SEKT 2</NavLink></div>
          </div>
        </li>

        <li>
          <div className="section3">
            <NavLink to={"/arenaSeats/seats"} className="seatLink" state={{ section: "Section 3" }}>SEKT 3</NavLink>
          </div>
        </li>
      </ul>
    </div>
  )
}
