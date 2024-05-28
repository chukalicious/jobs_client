import { useState, useEffect } from 'react';
import LoginForm from './LoginForm';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, reset } from '../../features/auth/authSlice';

const LoginContainer = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, loading, error, message, success } = useSelector(
    (state) => state.auth
  );

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (error) {
      console.log(message);
    }

    if (success) {
      navigate('/listings');
    }
    dispatch(reset());
  }, [success, message, user, navigate, error, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
    dispatch(login(loginData));
  };

  return (
    <LoginForm
      loginData={loginData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default LoginContainer;
