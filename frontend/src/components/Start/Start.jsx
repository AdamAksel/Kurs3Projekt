import React, {useContext, useState} from 'react'
import StartCards from '../Cards/StartCards'
import {events} from '../event-info'
import './Start.css'
import GlobalContext from "../../GlobalContext.jsx";

const Start = () => {
    const {concerts} = useContext(GlobalContext)

    return (
        <>
            <section className=''>
                <div className='startPage'>
                    {concerts
                        .filter((event, index) => index < 6)
                        .map((event, index) => (
                            <div className='sect-cards' key={event.date}>
                                <StartCards event={events[index]}/>
                            </div>
                        ))}
                </div>
            </section>
        </>
    )
}

export default Start
