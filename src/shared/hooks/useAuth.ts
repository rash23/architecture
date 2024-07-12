import { useEffect, useState } from 'react';
import { authService } from 'core/services/AuthService';
import { useNavigate } from '@tanstack/react-router';

export interface AuthContext {
  isAuthenticated: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
  error: string | null;
}

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const subscription = authService.isAuthenticated().subscribe(setIsAuthenticated);
    return () => subscription.unsubscribe();
  }, []);

  const login = (username: string, password: string) => {
    try {
      authService.login(username, password);
      setError(null);
      navigate({ to: '/dashboards' });
    } catch (e) {
      console.error('Invalid username or password');
      setError('Invalid username or password');
    }
  };

  const logout = () => {
    authService.logout();
    navigate({ to: '/login' });
  };

  return {
    isAuthenticated,
    login,
    logout,
    error,
  };
};
