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
  const loading = useSelector((state) => state.posts.loading);
  console.log('ListingsContainer: loading: ', loading);
  const user = useSelector((state) => state.auth); // user: user.user { _id: '60f7b3b3b3

  useEffect(() => {
    if (!user.user) {
      navigate('/login');
    }
    dispatch(getPosts());

    dispatch(reset());
  }, [user.user, navigate, dispatch, posts]);

  if (loading) {
    <Hearts
      height='80'
      width='80'
      color='#EEAF39'
      ariaLabel='hearts-loading'
      wrapperStyle={{}}
      wrapperClass=''
      visible={true}
    />;
  }

  return (
    <>
      {/* <SearchBar /> */}
      <div className='navbar text-primary-content'>
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
