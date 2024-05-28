import React from 'react';

const Listings = ({ jobs }) => {
  return (
    <div>
      {jobs.map((job) => (
        <div
          key={job._id}
          className='card w-96 bg-base-100 shadow-xl'
        >
          <div className='card-body'>
            <h2 className='card-title'>{job.title}</h2>
            <p>{job.company}</p>
            <p>{job.description}</p>
            <p>{job.location}</p>
            <p>{job.salary}</p>
            <div className='card-actions justify-end'>
              <button className='btn btn-primary'>Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listings;
