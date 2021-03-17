import React, { useContext } from 'react'
import { Context } from '../ContextProvider'
import icon from '../images/icon.webp'
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
    const { state, toggleCountyApp } = useContext(Context)
    let countyActive = state.countyApp ? ' active' : ''
    const stateActive = !state.countyApp ? ' active' : ''

    return (
        <React.Fragment>
            <div className={`openCountyApp${countyActive}`} onClick={state.countyApp? () => toggleCountyApp(false) : () => toggleCountyApp(true)}>
                <FontAwesomeIcon icon={state.countyApp? faChevronLeft : faChevronRight} />
            </div>
            <div className="sidenav">
            <div className="sidenav-title">
                <div className="logo">
                    <img src={icon} width={30} />
                </div>
                <div className="title">Real Estate</div>
                <div className="subtitle">Market Statistics</div>
            </div>
            <div className="sidenav-menu">
                <div
                    className={`menu-item${stateActive}`}
                    onClick={() => toggleCountyApp(false)}
                >
                    State Data
                </div>
                <div
                    className={`menu-item${countyActive}`}
                    onClick={() => toggleCountyApp(true)}
                >
                    Open County Data
                </div>
            </div>
            <div className="sidenav-footer">
              <div className="realtor-link">
                Data from <a href="https://www.realtor.com/research/data/" target="_blank">realtor.com</a> 
              </div>
              <div className="chartfactor-link">
                Powered by <a href="https://chartfactor.com" target="_blank">ChartFactor</a> 
              </div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default Sidebar
