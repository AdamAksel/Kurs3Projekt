import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Start from './components/Start/Start'
import Event from './components/Event/Event'
import Login from './components/Login/Login'
import Calendar from './components/Calendar/Calendar'
import Modal from './components/Modal/Modal'
import Seats from "./components/Seats/Seats";
import SeatArena from "./components/Seats/SeatArena";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import './App.css'
import SignUp from './components/Signup/SignUp'
import BuyTickets from "./components/BuyTickets/BuyTickets";
import BuyTicketsStand from "./components/BuyTickets/BuyTicketsStand";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Start />} />
      <Route path='/Calendar' element={<Calendar />} />
      <Route path='/Login' element={<Login />} />

      <Route path='/Event/:id' element={<Event />} />
      <Route path='/Artist/:id' element={<Modal />} />
      <Route path='/Signup' element={<SignUp />} />
      <Route path="/arenaSeats/seats" element={<Seats />} />
      <Route path="/arenaSeats" element={<SeatArena />} />
      <Route path="/paymentStand" element={<BuyTicketsStand />} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
