import { FC } from 'react';

const HomePage: FC = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold mb-4'>Hello, World!</h1>
      <p className='text-gray-600 mb-4'>To see dashboard you should be authorized</p>
    </div>
  );
};

export default HomePage;
