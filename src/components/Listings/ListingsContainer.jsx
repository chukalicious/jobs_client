import Listings from './Listings';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../../features/posts/postsSlice';

const ListingsContainer = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return <Listings jobs={posts} />;
};

export default ListingsContainer;
