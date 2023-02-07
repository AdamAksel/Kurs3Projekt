import React, { useState, useContext } from 'react'
import './Sidebar.css'
import SidebarCard from '../Sidebar-Card/Sidebar-Card.jsx'
import GlobalContext from '../../GlobalContext'

const Sidebar = () => {
  const { recentlyAddedEvents, todaysEvents } = useContext(GlobalContext)

  const [viewChange, setViewChange] = useState(0)

  return (
    <>
      <div className='Sidebar-Container'>
        <div className='Sidebar-Texts'>
          <div
            style={viewChange === 0 ? { backgroundColor: '#374a64' } : null}
            onClick={() => {
              setViewChange(0)
            }}
            className='Sidebar-TodaysEvents-Text'
          >
            {' '}
            Today's Events{' '}
          </div>
          <div
            style={viewChange === 1 ? { backgroundColor: '#374a64' } : null}
            onClick={() => {
              setViewChange(1)
            }}
            className='Sidebar-RecentlyAdded-Text'
          >
            {' '}
            Recently Added{' '}
          </div>
        </div>
        {viewChange === 0 ? (
          <div className='Sidebar-TodaysEvents'>
            {todaysEvents
              .filter((event, index) => index < 2)
              .map((event) => (
                <div
                  key={Math.random() * 1000000}
                  className='Sidebar-TodaysEvents-Cards'
                >
                  <SidebarCard event={event} />
                </div>
              ))}
          </div>
        ) : (
          <div className='Sidebar-RecentlyAdded'>
            <div className='Sidebar-RecentlyAdded-Cards'>
              {recentlyAddedEvents
                .filter((event, index) => index < 2)
                .map((event) => (
                  <div
                    key={Math.random() * 1000000}
                    className='Sidebar-TodaysEvents-Cards'
                  >
                    <SidebarCard event={event} />
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Sidebar
