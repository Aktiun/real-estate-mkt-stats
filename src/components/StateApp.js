import React, {useEffect} from 'react'
import './StateApp.css'
import Widget from './Widget'
import MetricSelector from './MetricSelector'
import InteractionManager from './InteractionManager'
import {
    timerange,
    trend,
    rawdata,
    bars,
    vectormap
} from '../visualizations/state-app'


function StateApp() {

  const lockScroll = (event) => {
      const metricList = document.getElementById('field-selector-values-state-fs')

      if (metricList && metricList.classList.contains('open')) {
          event.target.scrollTo(0,0)
      } 
  }

  useEffect(() => {
      const dashboard = document.getElementsByClassName('dashboard-state')

      dashboard[0].addEventListener('scroll', lockScroll, false)
      return () => {
        dashboard[0].removeEventListener('scroll', lockScroll)
      }
  }, [])



    return (
        <div className="dashboard-state">
            <div className="top-widget">
              <div className="header-widget">
                <InteractionManager />
                <MetricSelector/>
              </div>
              <Widget
                  id="time-range"
                  title=""
                  size={'size-12'}
                  style={{ height: 90 }}
                  fill={false}
                  viz={timerange}
              />
            </div>
            <div className="row size-12">
                <Widget
                    id="bars-states"
                    title="States"
                    size={'size-6'}
                    style={{ height: 789 }}
                    viz={bars}
                />
              <div className="column size-6" style={{height: 790}}>
                    <Widget
                        id="trend-states"
                        title="Listing trend"
                        size={'size-12'}
                        style={{ height: 350, marginTop: 5 }}
                        viz={trend}
                    />
                    <Widget
                        id="vectormap-states"
                        title="USA Map"
                        size={'size-12'}
                        style={{ height: 435 }}
                        viz={vectormap}
                    />
                </div>
            </div>

            <Widget
                id="rawdata-states"
                title="Raw Data Table"
                size={'size-12'}
                style={{ height: 500 }}
                viz={rawdata}
            />
        </div>
    )
}

export default StateApp
