import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import MetricSelector from './components/MetricSelector'
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
    if(gotIt && gotIt == 'true') {
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

    document.getElementById("metric-animation")
      .classList.remove("metric-animation");
  }

  const startAnimation = () => {
    const focusTool = document.getElementById("focus-tool");
    focusTool.classList.remove("focus-tool-hide");
    focusTool.classList.add("focus-tool");
    
    const focusToolBg = document.getElementById("focus-tool-bg");
    focusToolBg.classList.remove("focus-tool-hide");
    focusToolBg.classList.add("focus-tool-bg");
    
    document.getElementById("metric-animation")
      .classList.add("metric-animation");
  }

  const doGotIt = () => {
    localStorage.setItem('gotIt', 'true');
    setGotIt('true');
  }

  return (
    <ContextProvider>
      <div id="focus-tool">
        <a onClick={doGotIt}>Got it!</a>
        <p>You can visualize different metrics by selecting them here</p>
      </div>
      <a className="focus-arrow"><FontAwesomeIcon icon={faLongArrowAltRight} /></a>
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
