import { Start, Navbar, Calendar, Login, Seats } from './components'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import './App.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Navbar />}>
      <Route index element={<Start />} />
      <Route path='/Calendar' element={<Calendar />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Seats' element={<Seats />} />
    </Route>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
