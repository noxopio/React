import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { ListadoApp } from './ListadoApp'
// import  {ContadorApp } from './ContadorApp'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<ListadoApp />




    {/* <ContadorApp 
    
    value={0}
    /> */}

  </React.StrictMode>,
)
