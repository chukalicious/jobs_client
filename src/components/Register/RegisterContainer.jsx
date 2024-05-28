import RegisterForm from './RegisterForm';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register, reset } from '../../features/auth/authSlice';

const RegisterContainer = () => {
  const [registerData, setRegisterData] = useState({
    email: '',
    name: '',
    password: '',
    retype: '',
  });

  const { email, name, password, retype } = registerData;

  console.log('RegisterContainer: registerData: ', registerData);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, error, success, loading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (localStorage.getItem('user')) {
      navigate('/listings');
    }
    if (error) {
      console.log(message);
    }
    if (success || user) {
      navigate('/listings');
    }
    // dispatch(reset());
  }, [error, success, user, navigate]);

  const handleChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== retype) {
      alert('Passwords do not match');
      return;
    }
    const registerData = {
      email,
      name,
      password,
    };
    dispatch(register(registerData));
  };

  return (
    <RegisterForm
      handleChange={handleChange}
      registerData={registerData}
      handleSubmit={handleSubmit}
    />
  );
};

export default RegisterContainer;
