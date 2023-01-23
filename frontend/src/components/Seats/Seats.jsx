import React from 'react'
import "./Seats.css";

const Seats = () => {
  return (
    <>
      <h1>Seats</h1>

     <div className='seat-container'>
        <div className="seat-column-1">SEKT 1</div>
        <div className="seat-column-2">
        <div className='seat-middle-column-1'>SCEN</div>
        <div className='seat-middle-column-2'></div>
        <div className='seat-middle-column-3'></div>
        </div>
        <div className="seat-column-1">SEKT 2</div>
     </div>
     
     
     
     
      {/*<div className='circle'>
        
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div className='middle-circle'>hej</div>
  </div>*/}
    </>
  )
}

export default Seats