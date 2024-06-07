import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from'react-router-dom'
import LogOrSign from './components/LogOrSign.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/signUp' element={<LogOrSign />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
