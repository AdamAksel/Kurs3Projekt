import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import StartPage from './components/Start/StartPage.jsx'
import Event from './components/Event/Event'
import Login from './components/Login/Login'
import Calendar from './components/Calendar/Calendar'
import Modal from './components/Modal/Modal'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import './App.css'
import SignUp from './components/Signup/SignUp'

const router = createBrowserRouter(createRoutesFromElements(<Route path='/' element={<App/>}>
    <Route index element={<StartPage/>}/>
    <Route path='/events'>
        <Route index element={<Calendar/>}/>
        <Route path=':id' element={<Event/>}/>
    </Route>
    <Route path='/login' element={<Login/>}/>
    <Route path='/artist/:id' element={<Modal/>}/>
    <Route path='/signup' element={<SignUp/>}/>
</Route>))

ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode>
    <RouterProvider router={router}/>
</React.StrictMode>)
