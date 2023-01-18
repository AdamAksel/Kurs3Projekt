import { Start, Navbar, Calendar, Login } from './components'
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
    </Route>
  )
)

function App() {
  return (
    <main className='main'>
      <RouterProvider router={router} />
    </main>
  )
}

export default App
