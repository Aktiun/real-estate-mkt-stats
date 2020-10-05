import React, { useEffect, useState } from 'react'
import { fieldselector as stateMetrics } from '../visualizations/state-app'
import './MetricSelector.css'

function MetricSelector() {
    const [ field, setField ] = useState('Active listings')
    const caret = ' ▼'
    let stateStyle = { height: 35, visibility: 'visible' }

    const openSelector = (e) => {
        const currentTop = e.target.offsetTop
        //const list = document.getElementById('field-selector-values-state-fs')
        //const top = currentTop + 30 + 'px'

        //list.style.width = '620px'
        //list.style.left = '900px'
        //list.style.top = top
        //list.classList.add('open')
    }

    useEffect(() => {
        const es = window.cf.getProviderByConfig({ name: 'Elasticsearch'});

        stateMetrics()
            .element('state-fs')
            .on('field-selected', e => { 
                const source = es.metadata.get('realtor_monthly_inventory_state_all')
                const field = source.objectFields.find(f => f.name === e.data);

                setField(field.label)
            })
            .execute()
            .catch(() => {})
    }, [])

    return (
        <div className={`metric-selector`} id="metric-selector">
            <div className="metric-title">Selected Metric</div>
            <div className="selected-metric" onClick={openSelector}> {caret + field} </div>
            <div className="selector" id="state-fs" style={stateStyle}></div>
        </div>
    )
}

export default MetricSelector
