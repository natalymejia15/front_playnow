import { useContext, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./iu/card";
import { EyeIcon, EyeOffIcon, MailIcon, LockIcon } from "lucide-react";
import { Label } from "./iu/label";
import { Input } from "./iu/input";
import { Button } from "./iu/button";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const LoginForm = () => {
  const userCtx = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log("Login attempt:", { email, password: "***" });
    setIsLoading(false);
  };

  const navigate = useNavigate();
  if (!userCtx) {
    throw new Error("Login debe estar dentro de UserProvider");
  }

  const { user, login } = userCtx;
  const handleLogin = () => {
    login(password, email);
    navigate("/dashboard");
  };

  if (user) {
    navigate("/dashboard");
    return null;
  }

  return (
    <Card className="w-full max-w-md shadow-medium border-0 bg-gradient-subtle">
      <CardHeader className="space-y-2 text-center">
        <CardTitle className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Bienvenido
        </CardTitle>
        <CardDescription className="text-muted-foreground text-lg">
          Ingresa a tu cuenta para continuar
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Correo electrónico
            </Label>
            <div className="relative">
              <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                id="email"
                type="email"
                placeholder="tu@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 h-12 transition-smooth focus:shadow-soft"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium">
              Contraseña
            </Label>
            <div className="relative">
              <LockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 pr-10 h-12 transition-smooth focus:shadow-soft"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-smooth"
              >
                {showPassword ? (
                  <EyeOffIcon className="h-4 w-4" />
                ) : (
                  <EyeIcon className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            onClick={handleLogin}
            className="w-full h-12 bg-gradient-primary hover:opacity-90 transition-smooth font-medium text-lg shadow-soft hover:shadow-medium"
          >
            {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
          </Button>
        </form>

        <div className="space-y-4 pt-4 border-t">
          <div className="text-center">
            <button className="text-primary hover:text-primary-hover transition-smooth text-sm font-medium">
              ¿Olvidaste tu contraseña?
            </button>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            ¿No tienes una cuenta?{" "}
            <button className="text-primary hover:text-primary-hover transition-smooth font-medium">
              Regístrate aquí
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginForm;