import React, { useEffect, useContext } from 'react'
import { Context } from '../ContextProvider'
import './Toast.css'

function Toast() {
    const { state, hideToast } = useContext(Context)
    const cssClass = state.toast.visible ? 'visible' : 'hidden'

    useEffect(() => {
        if (state.toast.visible) {
          setTimeout(() => { hideToast() }, 5000)
        }
    })

    return (
        <div className={`toast ${cssClass} ${state.toast.toastPosition}`}>
          {state.toast.message}
        </div>
    )
}

export default Toast
