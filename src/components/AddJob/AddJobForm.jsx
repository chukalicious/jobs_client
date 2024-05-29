import React from 'react';

const AddJobForm = ({ handleChange, jobData, handleSubmit }) => {
  return (
    <div className='flex flex-col max-w-sm mx-auto'>
      <form
        onSubmit={handleSubmit}
        className='form-control my-8'
      >
        <input
          onChange={handleChange}
          name='title'
          value={jobData.title}
          type='text'
          placeholder='Job Title: '
          className='input input-primary my-2'
        />
        <input
          onChange={handleChange}
          name='company'
          value={jobData.company}
          placeholder='Company: '
          type='text'
          className='input input-primary my-2'
        />
        <input
          onChange={handleChange}
          name='location'
          value={jobData.location}
          placeholder='Location:  '
          type='text'
          className='input input-primary my-2'
        />
        <input
          onChange={handleChange}
          name='salary'
          value={jobData.salary}
          placeholder='Salary:  '
          type='text'
          className='input input-primary my-2'
        />
        <textarea
          onChange={handleChange}
          name='description'
          value={jobData.description}
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
