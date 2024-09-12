import {
  useContext,
  createContext,
  useState,
  FC,
  ReactNode,
  useEffect,
} from 'react';
import { useNavigate } from 'react-router-dom';
import rootConfig from '@config/index';

interface AuthContextInterface {
  user: UserType | null;
  token: string;
  handleLogin: (data: any) => void;
  handleLogOut: () => void;
  handleProfile: () => void;
  error?: any;
}

type UserType = {
  username: string;
  email: string;
  phone: string;
  name: string;
};

const AuthContext = createContext<Partial<AuthContextInterface>>({});

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const navigate = useNavigate();
  const handleLogin = async (data: any) => {
    try {
      const response = await fetch(rootConfig.apiUrl + '/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const res = await response.json();
      if (res?.access_token) {
        setUser(res.user);
        setToken(res.access_token);
        localStorage.setItem('token', res.access_token);
        await handleProfile();
        navigate('/');
        return;
      }

      throw new Error(res.message);
    } catch (error: any) {
      setError(error?.message);
    }
  };

  const handleProfile = async () => {
    if (!token || typeof token === undefined) {
      return;
    }

    try {
      const response = await fetch(rootConfig.apiUrl + '/auth/profile', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const res = await response.json();

      if (res?.statusCode && res?.statusCode !== 200) {
        localStorage.removeItem('token');
        navigate('/');
        return;
      }

      setUser(res);
    } catch (error: any) {
      setError(error?.message);
    }
  };

  const handleLogOut = () => {
    setUser(null);
    setToken('');
    localStorage.removeItem('token');
    navigate('/login');
  };

  useEffect(() => {
    handleProfile();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, token, handleLogin, handleLogOut, handleProfile, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context as AuthContextInterface;
};

export { AuthProvider, useAuth };
