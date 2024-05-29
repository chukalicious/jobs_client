import AddJobForm from './AddJobForm';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createPost, reset } from '../../features/posts/postsSlice';

const AddJobContainer = () => {
  const [jobData, setJobData] = useState({
    title: '',
    company: '',
    location: '',
    salary: '',
    description: '',
  });
  console.log('AddJobContainer: jobData: ', jobData);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { posts, error, success, loading, message } = useSelector(
    (state) => state.posts
  );
  const { user } = useSelector((state) => state.auth);
  console.log('AddJobContainer: user: ', user);

  useEffect(() => {
    if (error) {
      console.log(message);
      dispatch(reset());
    }

    if (success) {
      console.log('You will be taken to the job listings');
      // navigate('/listings');
      dispatch(reset());
    }

    dispatch(reset());
  }, [error, success, message, dispatch, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData({ ...jobData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('AddJobContainer: handleSubmit: jobData: ', jobData);
    const newJobPosting = {
      ...jobData,
      authorID: user._id,
    };
    dispatch(createPost(newJobPosting));
    // navigate('/listings');
  };

  return (
    <AddJobForm
      jobData={jobData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default AddJobContainer;
