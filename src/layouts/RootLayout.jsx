import { Outlet } from 'react-router-dom'
import logo from '../assets/techover-logo.png'
import './RootLayout.css'

const dynamisk = "dynamisk";

const RootLayout = () => {
    return (
        <div className="root-layout">
            <header>
                <nav className="navbar">
                  <div className="navbar-info">
                    <p>The Flag App</p>
                    <img className="logo" src={logo} alt="Techover-logo" />
                    <button className="light-mode-btn">{dynamisk}</button>
                  </div>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout;