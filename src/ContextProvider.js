import React, { useState } from 'react'

export const Context = React.createContext()
const initialState = {
    countyApp: false,
    toast: {
        message: '',
        visible: false,
        toastPosition: ''
    }
}

export function ContextProvider(props) {
    const [state, setState] = useState(initialState)

    const toggleCountyApp = (toggle) => {
        const im = window.cf.getIManager()
        const filters = im ? im.get('api').getFilters() : []
        const stateFilter = filters.find(f => f.getPath() === 'state_name.keyword')

        if (stateFilter) {
            setState({
                ...state,
                countyApp: toggle
            })
        } else if (toggle) {
            const message = 'Select a state to see its counties'
            setState({ ...state, toast: { message, visible: true, toastPosition: 'left' } })
        }
    }

    const showToast = (message) => {
        setState({ ...state, toast: { message, visible: true } })
    }

    const hideToast = () => {
        setState({ ...state, toast: { ...state.toast, visible: false } })
        setTimeout(() => {
            setState({ ...state, toast: { ...state.toast, visible: false, toastPosition: '' } })
        }, 650)
    }

    const properties = {
        state,
        toggleCountyApp,
        hideToast,
        showToast
    }

    return (
        <Context.Provider value={properties}>{props.children}</Context.Provider>
    )
}
