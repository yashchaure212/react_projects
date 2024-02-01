import React, { useEffect, useState } from 'react'
import Popup from './components/Popup'

function App() {

  const [trigger, setTrigger] = useState(false);
  const [timedPopup, setTimedPopup] = useState(false);

  useEffect (() => {
    setTimeout(() => {
      setTimedPopup(true);
    },5000)
  }, [])

  return (
    <div>
      <button onClick={() => setTrigger(true)} >Open</button>
      <h1>Timed popup will automaatically apppear on screen after 5 seconds</h1>
      <br/>
      <br/>
      <h1>for Button Popup click on the open button</h1>
      <Popup trigger={trigger} setTrigger={setTrigger}>
      <h3>button popup</h3>
        <p>press close button to close the popup</p>
      </Popup>
      <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
        
        <h3>timed popup</h3>
        <p>press close button to close the popup</p>
      </Popup>
    </div>
  )
}

export default App