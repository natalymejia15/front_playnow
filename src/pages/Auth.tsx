import { useState} from 'react';
import { ForgotPasswordForm } from '../components/ForgotPasswordForm';
import { AuthForm } from '../components/AuthForm';

type AuthView = 'login' | 'register' | 'forgot-password';

const Auth = () => {
  const [currentView, setCurrentView] = useState<AuthView>('login');


  const handleModeChange = (mode: 'login' | 'register') => {
    setCurrentView(mode);
  };

  const handleForgotPassword = () => {
    setCurrentView('forgot-password');
  };

  const handleBackToLogin = () => {
    setCurrentView('login');
  };


  if (currentView === 'forgot-password') {
    return <ForgotPasswordForm onBack={handleBackToLogin} />;
  }

  return (
    <AuthForm
      mode={currentView}
      onModeChange={handleModeChange}
      onForgotPassword={handleForgotPassword}
    />
  );
};

export default Auth;