import { Start, Navbar, Calendar, Login } from './components'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import './App.css'
import Cards from './components/Cards/Cards'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Navbar />}>
      <Route index element={<Start />} />
      <Route path='/Calendar' element={<Calendar />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Cards' element={<Cards />} />
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
