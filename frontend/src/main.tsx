import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import CreatePatient from './components/CreatePatient'
import ListPatient from './components/ListPatient'
import Pag1 from './components/pag1'
import PagPatient from './components/PagPatient'
//import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <Pag1/>
  </React.StrictMode>
)
