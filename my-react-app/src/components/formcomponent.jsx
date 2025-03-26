
import React, { useState } from 'react';
import './formcomponents.css';  
import Dashboard from './dashboard';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate(); 

 
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
        console.log("Hllo");
        
      if (email === 'user@example.com' && password === 'password') {
      navigate('/dashboard');
    } else {
      navigate('/dashboard');
    }
    };
  } 

  return (
    <div className="auth-form-container">
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
       
        {!isLogin && (
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        )}
        

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

    
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>

      <p>
        {isLogin ? (
          <span>
            Don't have an account?{' '}
            <a href="#" onClick={() => setIsLogin(false)}>Sign Up</a>
          </span>
        ) : (
          <span>
            Already have an account?{' '}
            <a href="#" onClick={() => setIsLogin(true)}>Log In</a>
          </span>
        )}
      </p>
    </div>
  );
};

export default AuthForm;


