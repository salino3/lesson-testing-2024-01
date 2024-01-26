import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// npm i --dev jest babel-jest @babel/preset-env @babel/preset-react 
// npm install --save-dev jest-svg-transformer
// npm install --save-dev @babel/core @babel/preset-typescript
// npm install --save-dev @testing-library/dom
// npm install --save-dev @testing-library/react @testing-library/dom
// npm install --dev @testing-library/react @testing-library/dom @testing-library/user-event @types/jest jest-environment-jsdom
// npm install --save-dev @babel/preset-env
// npm i --save-dev identity-obj-proxy

// npm install --save-dev @types/jest @types/jasmine @testing-library/jest-dom


//*> npm test -- --clearCache


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
