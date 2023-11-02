import { useState } from 'react'
import Email from './SignUp/Email.jsx' 
import Success from './success/Success.jsx' 

import './App.css'

function App() {
  const [show, setShow] = useState(true)
  const [zed,setZed] = useState("");


  return (
    <div className='w-full min-h-screen bg-purple-400 grid place-items-center'>


      {show && <Email setZed={setZed} zed={zed} setShow={setShow}/>} 
      {!show && <Success zed={zed} setShow={setShow}/>}
    </div>
  )
}

export default App