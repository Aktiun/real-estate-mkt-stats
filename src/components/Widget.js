import React, { useContext, useEffect } from 'react'
import './Widget.css'

function Widget({ id, size, style = {}, fill = true, title, viz }) {
    let elementHeight = style.height - 30

    if (!fill) {
        if (!style.background) style.background = 'transparent'
        style.boxShadow = 'none'
        elementHeight = style.height
    }

    useEffect(() => {
        viz()
            .element(id)
            .execute()
            .catch(() => {
                console.log(`There was an error with widget ${id}`)
            })
    }, [])

    return (
        <div className={`widget ${size}`} style={style}>
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
