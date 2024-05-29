import React from 'react';

const AddJobForm = () => {
  return (
    <div className='flex flex-col max-w-sm mx-auto'>
      <form className='form-control my-8'>
        <input
          type='text'
          placeholder='Job Title: '
          className='input input-primary my-2'
        />
        <input
          placeholder='Company: '
          type='text'
          className='input input-primary my-2'
        />
        <input
          placeholder='Location:  '
          type='text'
          className='input input-primary my-2'
        />
        <input
          placeholder='Salary:  '
          type='text'
          className='input input-primary my-2'
        />
        <textarea
          placeholder='Description:  '
          type='text'
          className='input input-primary my-2 h-36 pt-3'
        />

        <div className='min-w-sm'>
          <button className='btn btn-primary btn-block mt-6'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddJobForm;
