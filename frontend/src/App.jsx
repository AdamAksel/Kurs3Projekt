import React from 'react'
import { Navbar } from './components'
import { Outlet } from 'react-router'
import {GlobalProvider} from "./GlobalContext.jsx";

function App() {
  return (
    <GlobalProvider>
    <header className="header_app">
      <Navbar />
      </header>
      <main className="main_app">
      <Outlet />
      </main>
    </GlobalProvider>
  )
}

export default App
