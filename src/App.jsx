import { Router } from "express"
import Dashboard from "./components/Dashboard"
import Login from "./components/Login"

function App() {
  return(
    <Routes>
      <Route path="/" element={<Login/} />
      <Route
    <Login/>
    <Dashboard/>
    </>
  )
}

export default App