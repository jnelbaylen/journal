import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/global'
import Root from './pages/Root'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
