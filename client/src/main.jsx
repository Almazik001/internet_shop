import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import UserStore from './store/UserStore.js'
import App from './App.jsx'
import DeviceStore from './store/DeviceStore.js'
import 'bootstrap/dist/css/bootstrap.min.css';

export const Context = createContext(null)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context.Provider value={{ 
        user: new UserStore(), 
        device: new DeviceStore,
      }}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
)
