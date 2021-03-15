import React, { useEffect, useState } from 'react'
import { fieldselector as stateMetrics } from '../visualizations/state-app'
import './MetricSelector.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

function MetricSelector() {
    const [ field, setField ] = useState('Active listings')
    const caret = (<FontAwesomeIcon icon={faCaretDown} />);
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
            <div className="metric-title"></div>
            <div className="selected-metric metric-animation" id="metric-animation" onClick={openSelector}>
                <a>{field}</a>
                <a>{caret}</a>
            </div>
            <div className="selector" id="state-fs" style={stateStyle}></div>
        </div>
    )
}

export default MetricSelector
