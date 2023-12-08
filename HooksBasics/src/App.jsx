import './App.css'
import React from 'react'
import { useState } from 'react'
import UseContext from './Components/UseContext'
import UseEffect from './Components/useEffect'
import UseState from './Components/useState'

export const ToggleTheme = React.createContext()

function App(){

  const [state,setState] = useState(true)

  const handleToggle = ()=>{
    setState(state=>!state)
  }

  return(
    <>
    <ToggleTheme.Provider value={state}>
      <button onClick={handleToggle}>Toggle</button>
      <UseContext/>
    </ToggleTheme.Provider>
    {/* <UseEffect/> */}
    {/* <UseState/> */}
    </>
  );
}

export default App 
