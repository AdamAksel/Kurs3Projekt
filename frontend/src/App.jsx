import React from 'react'
import {Navbar} from './components'
import {Outlet} from 'react-router'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
    return (
        <>
            <Navbar/>
            <div className="flex">
            <Sidebar/>
            <Outlet/>
            </div>
        </>
    )
}

export default App
