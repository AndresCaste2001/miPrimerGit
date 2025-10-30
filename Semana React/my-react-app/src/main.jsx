import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ComponenteA from './ComponenteA.jsx'
import { ColorProvider } from './colorContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ColorProvider>
      <ComponenteA></ComponenteA>
    </ColorProvider>
  </StrictMode>,
)
