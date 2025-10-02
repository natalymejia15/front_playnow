import { Route, Routes } from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute"
import Dashboard from "./pages/Dashboard"
import LoginPage from "./pages/Login"
import Home from "./pages/Home"
import { TooltipProvider } from "./components/iu/tooltip"
import { Toaster } from "./components/iu/toaster"
import { Toaster as Sonner } from "./components/iu/sonner";
import AuthPage from "./pages/Auth"

function App() {
  return (

    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AuthPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </TooltipProvider>

  )
}

export default App