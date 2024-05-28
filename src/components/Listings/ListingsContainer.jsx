import Listings from './Listings';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../../features/posts/postsSlice';

const ListingsContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  console.log('ListingsContainer: posts:', posts);
  const user = useSelector((state) => state.auth);
  console.log('ListingsContainer: user: user.user', user.user); // user: user.user { _id: '60f7b3b3b3

  useEffect(() => {
    if (!user.user) {
      navigate('/login');
    }
  }, [user.user, navigate]);

  return <Listings posts={posts} />;
};

export default ListingsContainer;
