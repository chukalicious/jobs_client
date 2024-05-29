import React from 'react';

const Listings = ({ posts }) => {
  return (
    <div className='flex flex-wrap w-full mx-auto'>
      {posts.map((job) => (
        <div
          key={job._id}
          className='card w-96 bg-base-100 shadow-xl min-w-xs my-4 mx-auto '
        >
          <div className='card-body'>
            <h2 className='card-title'>{job.title}</h2>
            <p>Company: {job.company}</p>
            <p>Description: {job.description}</p>
            <p>Location: {job.location}</p>
            <p>Salary: {job.salary}</p>
            <p>
              Posted on:{' '}
              {new Date(job.postedOnDate).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </p>
            <p>Posted By: {job.postedBy.name} </p>
            <div className='card-actions justify-end'>
              <button className='btn btn-primary'>edit</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listings;
