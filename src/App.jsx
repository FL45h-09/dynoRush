import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import './assets/css/style.css'
 import { MainScene } from './components/MainScene'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainScene />
  </React.StrictMode>,
)
