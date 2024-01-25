import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// npm install --save-dev jest-svg-transformer
// npm install --save-dev @babel/core @babel/preset-typescript
// npm install --save-dev @testing-library/dom
// npm install --save-dev @testing-library/react @testing-library/dom





ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
