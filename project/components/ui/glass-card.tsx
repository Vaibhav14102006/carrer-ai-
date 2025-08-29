'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  blur?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  background?: 'white' | 'dark' | 'colored';
  border?: boolean;
  shadow?: boolean;
  animation?: boolean;
}

export function GlassCard({
  children,
  className,
  hover = true,
  blur = 'xl',
  background = 'white',
  border = true,
  shadow = true,
  animation = true
}: GlassCardProps) {
  const blurClasses = {
    'sm': 'backdrop-blur-sm',
    'md': 'backdrop-blur-md',
    'lg': 'backdrop-blur-lg',
    'xl': 'backdrop-blur-xl',
    '2xl': 'backdrop-blur-2xl',
    '3xl': 'backdrop-blur-3xl'
  };

  const backgroundClasses = {
    'white': 'bg-white/10 dark:bg-white/5',
    'dark': 'bg-gray-900/20 dark:bg-gray-900/10',
    'colored': 'bg-gradient-to-br from-white/20 via-blue-50/20 to-purple-50/20 dark:from-gray-900/20 dark:via-blue-900/10 dark:to-purple-900/10'
  };

  const borderClasses = border ? 'border border-white/20 dark:border-gray-700/30' : '';
  const shadowClasses = shadow ? 'shadow-xl hover:shadow-2xl' : '';

  const Component = animation ? motion.div : 'div';
  const props = animation ? {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    whileHover: hover ? { y: -5, scale: 1.02 } : {},
    transition: { duration: 0.3 }
  } : {};

  return (
    <Component
      {...props}
      className={cn(
        'rounded-2xl transition-all duration-500 overflow-hidden',
        blurClasses[blur],
        backgroundClasses[background],
        borderClasses,
        shadowClasses,
        'hover:bg-opacity-30 dark:hover:bg-opacity-20',
        className
      )}
    >
      {children}
    </Component>
  );
}

export function GlassButton({
  children,
  className,
  variant = 'default',
  ...props
}: {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'gradient' | 'outline';
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const baseClasses = 'px-6 py-3 rounded-xl font-medium transition-all duration-300 backdrop-blur-xl';
  
  const variantClasses = {
    default: 'bg-white/20 hover:bg-white/30 text-gray-900 dark:text-white border border-white/30 dark:border-gray-700/30',
    gradient: 'bg-gradient-to-r from-blue-500/80 to-purple-500/80 hover:from-blue-600/90 hover:to-purple-600/90 text-white shadow-lg hover:shadow-xl',
    outline: 'bg-transparent border-2 border-white/30 dark:border-gray-600/30 hover:bg-white/10 dark:hover:bg-gray-800/20 text-gray-900 dark:text-white'
  };

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        'hover:scale-105 active:scale-95',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function GlassInput({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        'px-4 py-3 rounded-xl bg-white/20 dark:bg-gray-900/20 border border-white/30 dark:border-gray-700/30',
        'backdrop-blur-xl text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-400',
        'focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50',
        'transition-all duration-300',
        className
      )}
      {...props}
    />
  );
}

export function GlassBadge({
  children,
  className,
  variant = 'default'
}: {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'success' | 'warning' | 'error';
}) {
  const variantClasses = {
    default: 'bg-white/20 text-gray-900 dark:text-white border-white/30 dark:border-gray-600/30',
    success: 'bg-green-500/20 text-green-900 dark:text-green-100 border-green-500/30',
    warning: 'bg-yellow-500/20 text-yellow-900 dark:text-yellow-100 border-yellow-500/30',
    error: 'bg-red-500/20 text-red-900 dark:text-red-100 border-red-500/30'
  };

  return (
    <span
      className={cn(
        'px-3 py-1 rounded-full text-sm font-medium border backdrop-blur-xl',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
