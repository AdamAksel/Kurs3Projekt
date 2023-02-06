import React, { useContext, useState, useEffect } from 'react'
import StartCards from '../Cards/StartCards'
import './Start.css'
import GlobalContext from '../../GlobalContext.jsx'
import Sidebar from '../Sidebar/Sidebar'


const Start = () => {
  const { concerts } = useContext(GlobalContext)
  const [featuredEvents, setFeaturedEvents] = useState([])
 
  
  async function todaysConcerts(){
    let tempArray = []
    for(let i = 0; i < 6; i++){
    tempArray.push(concerts[Math.floor(Math.random() * concerts.length) ])
    let today = new Date();
    let date=today.getDate() + "-"+ parseInt(today.getMonth()+1) +"-"+today.getFullYear();
    tempArray[i].datum = date
    }
    setFeaturedEvents([...tempArray])
}

async function recentlyAddedConcerts(){
  let tempArray = []
  for(let i = 0; i < 6; i++){
  tempArray.push(concerts[Math.floor(Math.random() * concerts.length) ])
  let today = new Date();
  let date=today.getDate() + "-"+ parseInt(today.getMonth()+1) +"-"+today.getFullYear();
  tempArray[i].added = date
  }
  setFeaturedEvents([...tempArray])
}

async function featuredConcerts(){
  let tempArray = []
  for(let i = 0; i < 6; i++){
 tempArray.push(concerts[Math.floor(Math.random() * concerts.length) ])
  }
  setFeaturedEvents([...tempArray])
 
}

useEffect(() => {
  featuredConcerts()
}, [])


  return (
    <>
      <section className='start-flex'>
      <Sidebar />
      <div className='start-buttons-container'>
        <div onClick={() => todaysConcerts()} className='start-button'>Todays Events</div>
        <div onClick={() => featuredConcerts()} className='start-button'>Featured</div>
        <div onClick={() => recentlyAddedConcerts()} className='start-button'>Latest Added</div>
      </div>
        <div className='startPage'>
       
          {featuredEvents.length == 0 ? null : featuredEvents
            .map((event) => (
              <div className='sect-cards' key={ Math.random() * 1000000}>
                <StartCards event={event} />
              </div>
            ))}
        </div>
      </section>
    </>
  )
}

export default Start
