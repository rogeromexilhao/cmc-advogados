import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RoutesPages from './RoutesPages'
import './assets/css/tailwind.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RoutesPages />
  </StrictMode>,
)
