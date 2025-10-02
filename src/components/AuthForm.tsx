import { useContext, useState } from "react";
import { useForm } from 'react-hook-form';
import { loginSchema, registrationSchema, type LoginFormData, type RegistrationFormData } from "../utils/validation";
import { Card, CardContent, CardHeader } from "./iu/card";
import { Label } from "./iu/label";
import { Input } from "./iu/input";
import { Button } from "./iu/button";
import { Eye, EyeOff, Lock, Mail, User } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import companyLogo from "../assets/login-hero.jpg"
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

interface AuthFormProps {
  mode: 'login' | 'register';
  onModeChange: (mode: 'login' | 'register') => void;
  onForgotPassword: () => void;
}

export const AuthForm = ({ mode, onModeChange, onForgotPassword }: AuthFormProps) => {
  const userCtx = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const loginForm = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const registerForm = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const currentForm = mode === 'login' ? loginForm : registerForm;

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
    <div className="min-h-screen bg-gradient-surface flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-auth border-0 bg-card">
        <CardHeader className="text-center space-y-6 pb-8">
          <div className="flex justify-center">
            <img
              src={companyLogo}
              alt="Logo de la empresa"
              className="h-16 w-16 object-contain"
            />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-foreground">
              {mode === 'login' ? 'Iniciar Sesión' : 'Crear Cuenta'}
            </h1>
            <p className="text-muted-foreground">
              {mode === 'login'
                ? 'Ingresa tus credenciales para acceder'
                : 'Completa los datos para registrarte'
              }
            </p>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-foreground">
                Correo electrónico
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="usuario@ejemplo.com"
                  className="pl-10 h-12 border border-gray-300 bg-gray-100 focus:border-gray-400 focus:ring-gray-400"
                  {...(mode === 'login' ? loginForm.register('email') : registerForm.register('email'))}
                />
              </div>
              {currentForm.formState.errors.email && (
                <p className="text-sm text-destructive">
                  {currentForm.formState.errors.email.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-foreground">
                Contraseña
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground text-gray-400" />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="pl-10 h-12 border border-gray-300 bg-gray-100 focus:border-gray-400 focus:ring-gray-400"
                  {...(mode === 'login' ? loginForm.register('password') : registerForm.register('password'))}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground hover:text-foreground transition-colors text-gray-400"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
              {currentForm.formState.errors.password && (
                <p className="text-sm text-destructive">
                  {currentForm.formState.errors.password.message}
                </p>
              )}
            </div>
            {/*   {mode === 'register' && (
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-sm font-medium text-foreground">
                  Confirmar contraseña
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    className="pl-10 pr-12 h-12 border-border focus:border-input-focus focus:ring-input-focus"
                    {...registerForm.register('confirmPassword')}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff /> : <Eye />}
                  </button>
                </div>
                {registerForm.formState.errors.confirmPassword && (
                  <p className="text-sm text-destructive">
                    {registerForm.formState.errors.confirmPassword.message}
                  </p>
                )}
              </div>
            )} */}
            <Button
              type="submit"
              variant="auth"
              disabled={isLoading}
              onClick={handleLogin}
              className="mt-6 "
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground"></div>
                  <span>Procesando...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{mode === 'login' ? 'Ingresar' : 'Registrar'}</span>
                </div>
              )}
            </Button>
          </form>
          <div className="space-y-4 pt-4 border-t border-border">
            {mode === 'login' && (
              <Button
                type="button"
                variant="link"
                onClick={onForgotPassword}
                className="w-full text-sm text-primary hover:text-primary-hover"
              >
                ¿Olvidaste tu contraseña?
              </Button>
            )}

            <div className="text-center">
              <span className="text-sm text-muted-foreground">
                {mode === 'login' ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?'}
              </span>
              <Button
                type="button"
                variant="link"
                onClick={() => onModeChange(mode === 'login' ? 'register' : 'login')}
                className="ml-1 text-sm text-primary hover:text-primary-hover p-0"
              >
                {mode === 'login' ? 'Crear cuenta' : 'Iniciar sesión'}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};