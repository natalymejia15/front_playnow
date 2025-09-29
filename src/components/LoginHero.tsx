import loginHeroImage from "../assets/login-hero.jpg"

const LoginHero = () => {
  return (
    <div className="relative h-full bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={loginHeroImage}
          alt="Login Hero Background"
          className="w-full h-full object-cover mix-blend-overlay "
        />
      </div>
      <div className="relative h-full flex items-center justify-center p-8">
        <div className="text-center text-white space-y-6 max-w-md">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight">
              Diseña el futuro
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Herramientas profesionales para crear experiencias extraordinarias
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-4 pt-8">
            <div className="flex items-center space-x-3 text-left">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-lg">Acceso a herramientas premium</span>
            </div>
            
            <div className="flex items-center space-x-3 text-left">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-lg">Colaboración en tiempo real</span>
            </div>
            
            <div className="flex items-center space-x-3 text-left">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-lg">Soporte 24/7</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-8 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/3 right-12 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
    </div>
  );
};

export default LoginHero;