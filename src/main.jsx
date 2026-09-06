import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ErrorBoundary from '@ui/ErrorBoundary'
import './styles/globals.css'
import './styles/typography.css'
import './styles/animations.css'
import { init as initAnalytics } from '@lib/analytics'

initAnalytics()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
)
