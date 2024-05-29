import Listings from './Listings';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts, reset } from '../../features/posts/postsSlice';
import SearchBar from '../SearchBar/SearchBar';

const ListingsContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  console.log('ListingsContainer: posts:', posts);
  const user = useSelector((state) => state.auth);
  console.log('ListingsContainer: user: user.user', user); // user: user.user { _id: '60f7b3b3b3

  useEffect(() => {
    if (!user.user) {
      navigate('/login');
    }
    dispatch(getPosts());
    return () => {
      dispatch(reset());
    };
  }, [user.user, navigate, dispatch, posts]);

  return (
    <>
      {/* <SearchBar /> */}
      <div className='navbar text-primary-content flex '>
        <button
          onClick={() => navigate('/create-job')}
          className='btn btn-secondary text-lg mx-auto my-6'
        >
          Post New Job
        </button>
      </div>
      <Listings posts={posts} />;
    </>
  );
};

export default ListingsContainer;
