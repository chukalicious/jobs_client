import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  // console.log('Navbar: user: ', user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/login');
  };

  // const firstName = () => {
  //   if (!user) {
  //     return;
  //   } else {
  //     const firstName = user.name.split(' ')[0];
  //     return firstName;
  //   }
  // };

  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <Link
          to='/'
          className='btn btn-ghost text-xl'
        >
          Jobs Postings
        </Link>
      </div>
      <div className='flex-none'>
        {user && <h1 className='text-2xl font-extralight'>Welcome </h1>}

        <button
          onClick={handleLogout}
          className='btn btn-square btn-ghost'
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
