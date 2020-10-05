import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import MetricSelector from './components/MetricSelector'
import CountyApp from './components/CountyApp'
import StateApp from './components/StateApp'
import Toast from './components/Toast'
import { setProvider } from './visualizations/provider'
import { ContextProvider } from './ContextProvider'

setProvider()

function App() {
    return (
      <ContextProvider>
        <div className="App">
          <StateApp/>
          <CountyApp/>
          <Sidebar />
          <Toast />
        </div>
      </ContextProvider>
    )
}

export default App
