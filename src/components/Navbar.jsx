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
    localStorage.removeItem('user');
    dispatch(logout());
    dispatch(reset());
    navigate('/login');
  };

  return (
    <div className='navbar bg-accent'>
      <div className='flex-1'>
        <Link
          to='/'
          className='btn btn-ghost text-xl'
        >
          Jobs Postings
        </Link>
      </div>
      <div className='flex-none'>
        <Link
          to='/listings'
          className='btn btn-square btn-ghost'
        >
          <button className='btn mx-14 btn-primary text-md'>
            See Listings
          </button>
        </Link>
        <button
          onClick={handleLogout}
          className='btn mx-14 btn-secondary text-md'
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
