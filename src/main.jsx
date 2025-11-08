import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// import redux store
import store from './redux/store.js'
import { Provider } from 'react-redux'

// importing react router
import { BrowserRouter } from "react-router-dom";


createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter >
      <Provider store={store} > {/* provide redux store to the entrie app */}
        <App />
      </Provider>  
    </BrowserRouter>
  </>,
)
