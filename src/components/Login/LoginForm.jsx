import React from 'react';

const LoginForm = ({ loginData, handleChange, handleSubmit }) => {
  return (
    <div className='flex flex-col items-center mt-9'>
      <form
        className='items-center'
        onSubmit={handleSubmit}
      >
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
