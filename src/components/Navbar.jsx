import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  console.log('Navbar: user: ', user);
  const firstName = user.name.split(' ')[0];

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
        <h1 className='text-2xl font-extralight'>Welcome {firstName}</h1>
        <Link to='/listings'>
          <button className='btn btn-square btn-ghost'>Jobs</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
