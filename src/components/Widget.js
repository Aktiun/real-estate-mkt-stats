import React, { useContext, useEffect } from 'react'
import './Widget.css'
import { Context } from '../ContextProvider'

function Widget({ id, size, style = {}, fill = true, title, viz }) {

    const { showToast } = useContext(Context)

    let elementHeight = style.height - 30

    if (!fill) {
        if (!style.background) style.background = 'transparent'
        elementHeight = style.height
    }

    useEffect(() => {
        if(id === 'time-range') {
            viz()
            .element(id)
            .on('notification', e => {
                const msg = `${e.type}: ${e.message}`
                showToast(msg)
            })
            .execute()
            .catch(() => {
                console.log(`There was an error with widget ${id}`)
            })
        } else {
            viz()
            .element(id)
            .execute()
            .catch(() => {
                console.log(`There was an error with widget ${id}`)
            })
        }
    }, [])

    return (
        <div className={`widget ${size}`} style={id === 'time-range'? {boxShadow : 'none',...style} : style}>
            {fill && <div className="widget-header">{title}</div>}
            <div className="widget-body">
                <div
                    id={id}
                    style={{ width: '100%', height: elementHeight }}
                ></div>
            </div>
        </div>
    )
}

export default Widget
