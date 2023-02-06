import React from 'react'
import {Navbar} from './components'
import {Outlet} from 'react-router'
import {GlobalProvider} from "./GlobalContext.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
function App() {
    return (
        <GlobalProvider>

            <header className="header_app">
                <Navbar/>
            </header>
            <main className="main_app">
                <Sidebar/>
                <div className="outlet_app">
                <Outlet/>
                </div>
            </main>
        </GlobalProvider>
    )
}

export default App
