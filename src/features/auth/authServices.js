import axios from 'axios';

const REGISTER_URL = 'http://localhost:8080/api/auth/register';

const register = async (userData) => {
  try {
    const response = await axios.post(REGISTER_URL, userData);
    console.log('authService: response: ', response);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const authServices = {
  register,
};

export default authServices;
