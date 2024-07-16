import { Outlet } from "react-router"
import { AuthProvider } from './store/AuthContext';

function App() {
  return (
    <>
      <AuthProvider>
        <Outlet></Outlet>
      </AuthProvider>
    </>
  )
}

export default App
