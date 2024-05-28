import React from 'react';

const LoginForm = ({ loginData, handleChange, handleSubmit }) => {
  return (
    <div className='flex flex-col items-center mt-9 h-screen'>
      <form
        className='items-center m-auto'
        onSubmit={handleSubmit}
      >
        <h1 className='text-4xl font-bold text-center'>Login</h1>
        <p className='text-center mb-7'>Please enter your email and password</p>
        <input
          type='text'
          placeholder='email'
          name='email'
          value={loginData.email}
          onChange={handleChange}
          className='input input-bordered w-full max-w-sm my-4 '
        />
        <input
          type='text'
          placeholder='password'
          name='password'
          value={loginData.password}
          onChange={handleChange}
          className='input input-bordered w-full max-w-sm my-4'
        />
        <div className='items-center flex flex-col my-4'>
          <button className=' btn btn-primary'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
