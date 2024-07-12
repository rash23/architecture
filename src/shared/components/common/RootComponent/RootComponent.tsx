import { FC, useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Theme } from '@radix-ui/themes';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { useAuth } from 'shared/hooks/useAuth';

const RootComponent: FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate({ to: '/dashboards' });
    }
  }, [isAuthenticated]);

  return (
    <Theme className='flex flex-col min-h-screen bg-gradient-to-r from-blue-100 to-pink-100 text-gray-800'>
      <Header />
      <Main />
      <Footer />
    </Theme>
  );
};

export default RootComponent;
