import './App.css'

import { Outlet } from 'react-router-dom'

// 5 - link entre páginas
import Navbar from "./components/Navbar";

function App() {

  return (
    <div>
      <Navbar />
      <Outlet />
      <p>Flooter</p>
    </div>
  )
}

export default App
