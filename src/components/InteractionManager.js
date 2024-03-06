import React, { useEffect } from 'react'
import { imanager } from '../visualizations/imanager'
import { changeTrendPinColor } from '../visualizations/state-app'
import { STATE_COLORS } from '../visualizations/colors'
import './Widget.css'

function InteractionManager() {
    const style = {
        width: '95%',
        height: 60,
        boxShadow: 'none',
        background: 'transparent'
    }

    const imCallback = (data) => {
        const filters = data.filters || data.filter
        const match = filters.find((f) => f.getPath() === 'state_name.keyword')

        if (match) {
            const item = document.getElementById('state_name.keyword')

            changeTrendPinColor()
            item.style.background = STATE_COLORS[match.getValue()[0]]
        }
    }

    const resetFilters = (e) => {
        const api = window.cf.getIManager().get('api')
        const currentFilters = api.getFilters()
        const nextFilterIsState = e.filters[0].getPath() === 'state_name.keyword'

        if (currentFilters.length === 3 && nextFilterIsState) {
            api.removeFilter(
                currentFilters.find((f) => f.getPath() === 'county_name')
            )
        }
    }

    useEffect(() => {
        const im = imanager().element('im')

        im.on('filter:added', imCallback)
            .on('filter:removed', imCallback)
            .on('filter:before-add', resetFilters)
            .execute()
            .catch(() => {
                console.log(`There was an error with the interaction manager`)
            })

        im.get('api').setFilters([window.timeFilter])
        im.get('api').updateContent()
    }, [])

    return (
        <div className="widget" style={style}>
            <div className="widget-body">
                <div
                    id="im"
                    style={{ width: '100%', height: style.height }}
                ></div>
            </div>
        </div>
    )
}

export default InteractionManager
