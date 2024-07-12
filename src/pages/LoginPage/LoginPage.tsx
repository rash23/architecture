import { FC, useState } from 'react';
import { Button, Input } from 'shared/components/UI';
import { useAuth } from 'shared/hooks/useAuth';

const LoginPage: FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, error } = useAuth();

  const handleLogin = () => {
    login(username, password);
  };

  return (
    <div className='max-w-md mx-auto my-10 p-6 bg-blue-100 rounded-xl shadow-md space-y-4'>
      <h1 className='text-2xl font-bold'>Login</h1>
      <Input type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
      <Input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
      {error && <p className='text-red-500'>{error}</p>}
      <Button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleLogin}>
        Login
      </Button>
    </div>
  );
};

export default LoginPage;
