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
                <Texts/>
                {viewChange === 0 ? <TodaysEvents/> : <RecentlyAdded/>}
            </aside>
        </>
    )

    function Texts() {
        return <div className='sidebar-texts'>
            <p style={viewChange === 0 ? {backgroundColor: '#374a64'} : null}
               onClick={() => setViewChange(0)}
               className='sidebar-button'
            >
                Today's Events
            </p>
            <p
                style={viewChange === 1 ? {backgroundColor: '#374a64'} : null}
                onClick={() => setViewChange(1)}
                className='sidebar-button'
            >
                Recently Added
            </p>
        </div>
    }

    function TodaysEvents() {
        return <section className='sidebar-todaysevents'>
            {todaysEvents
                .slice(1)
                .map(event => <div
                        key={event.id}
                        className='sidebar-todaysevents-cards'
                    >
                        <SidebarCard event={event}/>
                    </div>
                )}
        </section>
    }

    function RecentlyAdded() {
        return <section className='sidebar-recentlyadded'>
            <div className='sidebar-recentlyadded-cards'>
                {recentlyAddedEvents
                    .slice(1)
                    .map(event => (
                        <div
                            key={event.id}
                            className='sidebar-todaysevents-cards'
                        >
                            <SidebarCard event={event}/>
                        </div>
                    ))}
            </div>
        </section>
    }
}
