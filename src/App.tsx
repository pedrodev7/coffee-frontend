import { useState } from 'react'
import { Router } from './routes/index'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';


function App() {


  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  )
}

export default App
