import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App5 from './app/App5.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App5 />
  </StrictMode>,
)
