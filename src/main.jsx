import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextDataProvider } from './ContextData.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextDataProvider>
      <App />
    </ContextDataProvider>
  </StrictMode>,
)
