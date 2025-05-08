import { Router } from "express"
import Dashboard from "./components/Dashboard"
import Login from "./components/Login"
import { BrowserRouter } from "react-router-dom"

function App() {
  return(
    <>
    <BrowserRouter>
    <Router>
    <Router path='/' element={<Login/>} />
    <Router path='/dashboard' element={<Dashboard />} />
    </Router>

    </BrowserRouter>
      
    </>
  )
}

export default App