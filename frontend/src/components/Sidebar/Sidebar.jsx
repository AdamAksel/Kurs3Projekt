import React, {useState, useContext} from 'react'
import './Sidebar.css'
import SidebarCard from '../Sidebar-Card/Sidebar-Card.jsx'
import GlobalContext from '../../GlobalContext'

export default function () {
    const {recentlyAddedEvents, todaysEvents} = useContext(GlobalContext)

    const [viewChange, setViewChange] = useState(0)

    return (
        <>
            <aside className='sidebar'>
                <div className='sidebar-texts'>
                    <p style={viewChange === 0 ? {backgroundColor: '#374a64'} : null}
                       onClick={() => {
                           setViewChange(0)
                       }}
                       className='sidebar-button'
                    >
                        {' '}
                        Today's Events{' '}
                    </p>
                    <p
                        style={viewChange === 1 ? {backgroundColor: '#374a64'} : null}
                        onClick={() => {
                            setViewChange(1)
                        }}
                        className='sidebar-button'
                    >
                        {' '}
                        Recently Added{' '}
                    </p>
                </div>
                {viewChange === 0 ? (
                    <section className='sidebar-todaysevents'>
                        {todaysEvents
                            .filter((event, index) => index < 2)
                            .map((event) => (
                                <div
                                    key={Math.random() * 1000000}
                                    className='sidebar-todaysevents-cards'
                                >
                                    <SidebarCard event={event}/>
                                </div>
                            ))}
                    </section>
                ) : (
                    <section className='sidebar-recentlyadded'>
                        <div className='sidebar-recentlyadded-cards'>
                            {recentlyAddedEvents
                                .filter((event, index) => index < 2)
                                .map((event) => (
                                    <div
                                        key={Math.random() * 1000000}
                                        className='sidebar-todaysevents-cards'
                                    >
                                        <SidebarCard event={event}/>
                                    </div>
                                ))}
                        </div>
                    </section>
                )}
            </aside>
        </>
    )
}
