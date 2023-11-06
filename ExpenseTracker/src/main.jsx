import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyles } from './Styles/GlobalStyles.js'
import { GlobalProvider } from './Context/GlobalContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <GlobalStyles/>
  <GlobalProvider>
  <App />
  </GlobalProvider>
  </React.StrictMode>,
)
