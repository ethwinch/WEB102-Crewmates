import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Header from './routes/Header'
import NotFound from './routes/NotFound'
import Details from './routes/Details'
import Create from './routes/Create'
import Gallery from './routes/Gallery'
import Update from './routes/Update'

import { BrowserRouter, Route, Routes } from "react-router-dom"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<App />} />
        <Route path="crewmate/:crewmate" element={<Details />} />
        <Route path="create" element={<Create />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="update/:crewmate" element={<Update />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
)
