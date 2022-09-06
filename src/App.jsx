import './Global.css'
import { Outlet } from "react-router-dom"
import { AuthProvider } from './context/authContext';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    </div>
  )
}

export default App
