import { Link } from '@tanstack/react-router';
import { FC } from 'react';
import { useAuth } from 'shared/hooks/useAuth';

const Header: FC = () => {
  const { isAuthenticated, logout } = useAuth();
  return (
    <header className='p-4 bg-blue-100 shadow-xl'>
      <nav className='flex justify-between text-lg'>
        <div className='flex gap-3'>
          <Link to='/' activeProps={{ className: 'font-bold' }} activeOptions={{ exact: true }}>
            Home
          </Link>

          {isAuthenticated && (
            <Link to='/dashboards' activeProps={{ className: 'font-bold' }} activeOptions={{ exact: true }}>
              Dashboards
            </Link>
          )}
        </div>

        <div>
          {isAuthenticated ? (
            <Link to='/'>
              {({ isActive }) => (
                <span className={isActive ? 'font-bold' : ''} onClick={logout}>
                  Logout
                </span>
              )}
            </Link>
          ) : (
            <Link to='/login'>{({ isActive }) => <span className={isActive ? 'font-bold' : ''}>Login</span>}</Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
