import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import { DynoChar } from './components/DynoChar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1>Hello</h1>
    <DynoChar />
  </React.StrictMode>,
)
