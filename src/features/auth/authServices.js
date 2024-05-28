import axios from 'axios';

const REGISTER_URL = 'http://localhost:8080/auth/register';

const register = async (userData) => {
  try {
    const response = await axios.post(REGISTER_URL, userData);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const authServices = {
  register,
};

export default authServices;
