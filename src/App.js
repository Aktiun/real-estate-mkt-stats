import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import CountyApp from './components/CountyApp'
import StateApp from './components/StateApp'
import Toast from './components/Toast'
import { setProvider } from './visualizations/provider'
import { ContextProvider } from './ContextProvider'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

setProvider()

function App() {

  const [gotIt, setGotIt] = useState(localStorage.getItem('gotIt'))

  useEffect(() => {
    if(gotIt && gotIt === 'true') {
      stopAnimation();
    } else {
      startAnimation();
    }
  }, [gotIt])

  const stopAnimation = () => {
    const focusTool = document.getElementById("focus-tool");
    focusTool.classList.remove("focus-tool");
    focusTool.classList.add("focus-tool-hide");

    const focusToolBg = document.getElementById("focus-tool-bg");
    focusToolBg.classList.remove("focus-tool-bg");
    focusToolBg.classList.add("focus-tool-hide");

    const focusArrow = document.getElementById("focus-arrow");
    focusArrow.classList.remove("focus-arrow");
    focusArrow.classList.add("focus-tool-hide");
  }

  const startAnimation = () => {
    const focusTool = document.getElementById("focus-tool");
    focusTool.classList.remove("focus-tool-hide");
    focusTool.classList.add("focus-tool");
    
    const focusToolBg = document.getElementById("focus-tool-bg");
    focusToolBg.classList.remove("focus-tool-hide");
    focusToolBg.classList.add("focus-tool-bg");
    
    const focusArrow = document.getElementById("focus-arrow");
    focusArrow.classList.remove("focus-tool-hide");
    focusArrow.classList.add("focus-arrow");
  }

  const doGotIt = () => {
    localStorage.setItem('gotIt', 'true');
    setGotIt('true');
  }

  return (
    <ContextProvider>
      <div id="focus-tool">
        <span onClick={doGotIt}>Got it!</span>
        <p>You can visualize different metrics by selecting them here</p>
      </div>
      <span id="focus-arrow" className="focus-arrow"><FontAwesomeIcon icon={faLongArrowAltRight} /></span>
      <div id="focus-tool-bg"></div>
      <div className="App">
        <StateApp />
        <CountyApp />
        <Sidebar />
        <Toast />
      </div>
    </ContextProvider>
  )
}

export default App
