import { FC } from 'react';
import { Outlet } from '@tanstack/react-router';

const Main: FC = () => {
  return (
    <main className='flex-grow p-4 bg-white'>
      <Outlet />
    </main>
  );
};

export default Main;
