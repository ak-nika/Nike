import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from'react-router-dom'
import LogOrSign from './pages/LogOrSign.jsx'
import Shoe from './pages/Shoe.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/signUp' element={<LogOrSign />} />
      <Route path='/product/:id' element={<Shoe />}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
