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
