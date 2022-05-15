import React from 'react'
import App from './App'
import {createRoot} from 'react-dom/client'


// CSS Global Imports
import 'bootstrap/dist/css/bootstrap.min.css'
import './Style/Global.css'
import './Style/Theme.css'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

