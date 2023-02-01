import {Navbar} from './components'
import {Outlet} from 'react-router'

export default function () {
    return <>
        <header className="header_app">
            <Navbar/>
        </header>
        <main className="main_app">
            <Outlet/>
        </main>
    </>
}
