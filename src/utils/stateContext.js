import {createContext, useContext} from 'react'

export const StateContext = createContext()

export const useGlobalState = () => useContext(StateContext)

//creates global state, makes a function that returns that state