import { useState } from 'react'
import './App.css'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function App() {
  const [password, setPassword] = useState("");
  const [showpass, setShowPass] = useState(false)

  const handleShowPass = () => {
    setShowPass(!showpass)
  }

  return (
    <>
    <div className="parent">
      <input 
        type={showpass ? "text" : "password"} 
        value={password} 
        placeholder='input password here . . .'
        onChange={(e) => setPassword(e.target.value)}/>
      {showpass ? (<FaEyeSlash onClick={handleShowPass} className='icon'/> ):
      (<FaEye onClick={handleShowPass} className='icon'/>)}
    </div>

    </>
  )
}

export default App
