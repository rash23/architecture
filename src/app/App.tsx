import { FC } from 'react';
import { RouterProvider } from '@tanstack/react-router';
import { router } from './routes/router';
import { useAuth } from 'shared/hooks/useAuth';

import 'shared/styles/index.css';
import '@radix-ui/themes/styles.css';

const App: FC = () => {
  const authentication = useAuth();
  return <RouterProvider router={router} context={{ authentication }} />;
};

export default App;
