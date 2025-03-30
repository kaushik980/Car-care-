import React, { useState, useEffect } from 'react';
import { Moon, Sun, Car } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Static data for validation
  const validCredentials = {
    username: 'Jatin Gautam',
    password: 'noize007',
  };

  useEffect(() => {
    const login = localStorage.getItem('login');
    if (login) {
      navigate('/adminpanel');
    }
  }, [navigate]);

  // Handle login form submission
  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Please fill in both fields');
    } else if (username !== validCredentials.username || password !== validCredentials.password) {
      setError('Invalid username or password');
    } else {
      // If the login is successful, set the flag in localStorage
      localStorage.setItem('login', 'true');
      setError('');
      alert('Login successful');
      // Navigate to the admin panel
      navigate('/adminpanel');
    }
  };

  // Toggle dark/light theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'
    }`}>
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 p-3 rounded-full hover:bg-opacity-80 transition-colors duration-200"
        style={{
          background: isDarkMode ? '#2d3748' : '#fff',
        }}
      >
        {isDarkMode ? (
          <Sun className="w-5 h-5 text-yellow-400" />
        ) : (
          <Moon className="w-5 h-5 text-gray-700" />
        )}
      </button>

      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className={`w-full max-w-md p-8 rounded-2xl shadow-2xl transition-colors duration-300 ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <div className="flex items-center justify-center mb-8">
            <div className={`p-3 rounded-full ${
              isDarkMode ? 'bg-gray-700' : 'bg-blue-50'
            }`}>
              <Car className={`w-8 h-8 ${
                isDarkMode ? 'text-blue-400' : 'text-blue-600'
              }`} />
            </div>
          </div>

          <h2 className={`text-3xl font-bold text-center mb-2 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            CAR CARE
          </h2>
          <p className={`text-center mb-8 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Sign in to your account
          </p>

          {error && (
            <div className="mb-6 p-4 text-sm text-red-600 bg-red-100 rounded-lg border border-red-200">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={`w-full px-4 py-3 rounded-lg transition-colors duration-200 ${
                  isDarkMode 
                    ? 'bg-gray-700 text-white border-gray-600 focus:border-blue-500' 
                    : 'bg-gray-50 text-gray-900 border-gray-300 focus:border-blue-500'
                } border focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
                placeholder="Enter your username"
              />
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-4 py-3 rounded-lg transition-colors duration-200 ${
                  isDarkMode 
                    ? 'bg-gray-700 text-white border-gray-600 focus:border-blue-500' 
                    : 'bg-gray-50 text-gray-900 border-gray-300 focus:border-blue-500'
                } border focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
