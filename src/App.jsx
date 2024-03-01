import './App.css'

import { Outlet } from 'react-router-dom'

// 5 - link entre páginas
import Navbar from "./components/Navbar";

// 6 - search params
import SearchForms from './components/SearchForms';

function App() {

  return (
    <div>
      <Navbar />
      <SearchForms />
      <Outlet />
      <p>Flooter</p>
    </div>
  )
}

export default App
