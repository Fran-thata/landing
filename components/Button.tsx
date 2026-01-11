import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  // Se cambia rounded-sm por rounded-full para hacerlo ovalado.
  // Se aumenta el padding horizontal (px-10) para equilibrar la forma.
  const baseStyles = "inline-flex items-center justify-center font-extrabold uppercase tracking-widest text-sm transition-all duration-300 ease-out border rounded-full px-10 py-4";
  
  const variants = {
    // Se añade una sombra dorada difuminada (glow) para hacerlo más "bonito" y premium
    primary: "bg-gradient-to-br from-premium-gold to-premium-gold-dark text-premium-dark border-transparent shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(212,175,55,0.6)] hover:brightness-110",
    outline: "bg-transparent text-premium-gold border-premium-gold hover:bg-premium-gold/10"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};