import React, { useContext, useEffect } from 'react'
import './CountyApp.css'
import Widget from './Widget'
import { Context } from '../ContextProvider'
import {
    trend,
    rawdata,
    bars,
    vectormap
} from '../visualizations/county-app'

function CountyApp() {
    const { state, toggleCountyApp } = useContext(Context)
    const appClass = state.countyApp ? 'visible' : 'hidden'
    const handleClick = (e) => {
        const selector = document.getElementById('dashboard-county')
        const sideNav = document.getElementById('sidenav-re')

        if (selector && !selector.contains(e.target) && sideNav && !sideNav.contains(e.target)) {
            toggleCountyApp(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClick)
        return () => {
            document.removeEventListener('mousedown', handleClick)
        }
    }, [])


    return (
        <div id="dashboard-county" className={`dashboard-county ${appClass}`}>
            <div className="row">
                <div className="column-county size-6">
                    <Widget
                        id="trend-counties"
                        title="Listing trend"
                        size={'size-12'}
                        style={{ height: 350 }}
                        viz={trend}
                    />
                    <Widget
                        id="vectormap-counties"
                        title="County Map"
                        size={'size-12'}
                        style={{ height: 435 }}
                        viz={vectormap}
                    />
                </div>
                <Widget
                    id="bars-counties"
                    title="Counties"
                    size={'size-6'}
                    style={{ height: 790 }}
                    viz={bars}
                />
            </div>

            <Widget
                id="rawdata-counties"
                title="Raw Data Table"
                size={'size-12'}
                style={{ height: 500 }}
                viz={rawdata}
            />
        </div>
    )
}

export default CountyApp
