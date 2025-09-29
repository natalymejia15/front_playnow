import { useEffect } from "react";
import LoginForm from "../components/LoginForm";
import LoginHero from "../components/LoginHero";

const Login = () => {
  useEffect(() => {
    document.title = "Iniciar Sesión - Plataforma de Diseño";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="grid lg:grid-cols-2 min-h-screen">
        <div className="flex items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-md">
            <LoginForm />
          </div>
        </div>
        
        <div className="hidden lg:block">
          <LoginHero />
        </div>
      </div>
    </div>
  );
};

export default Login;