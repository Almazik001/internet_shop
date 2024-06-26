import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import CustomNavbar from './components/CustomNavbar';

function App() {
  
  return (
    <BrowserRouter>
      <CustomNavbar />
      <AppRouter />
    </BrowserRouter>
  )
}

export default App
