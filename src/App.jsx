import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import { LandingPage } from './Components/LandingPage'
import { ComparePage } from './Components/ComparePage'

function App() {
  const [count, setCount] = useState(0)

  return (
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/compare' element={<ComparePage/>}/>
      </Routes>
  )
}

export default App
