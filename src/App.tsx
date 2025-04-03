import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Login from './Login/LoginPage'

function App() {
  return (
    <Router>
      <div className="bg-red-500"> 
       <Login/>
      </div>
    </Router>
  )
}

export default App
