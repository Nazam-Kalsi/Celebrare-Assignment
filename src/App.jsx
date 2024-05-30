import { useState } from 'react'
import './App.css'
import { FileInput,Header } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
     <FileInput/>
    </>
  )
}

export default App
