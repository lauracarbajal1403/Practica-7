import { useState } from 'react'
import './App.css'
import { MyRoutes } from "./routers/routes" 

function App() {
  const [count,setCount] = useState(0)
  return (
    <div>
    <header className='header'>
      <h1 className='title'>🎬 P E L I C U L A S 🎬</h1>
    </header>
    <MyRoutes/>
    </div>
  )
}

export default App
