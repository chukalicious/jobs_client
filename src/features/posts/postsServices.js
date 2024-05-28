import axios from 'axios';

const POST_URL = 'http://localhost:8080/api/jobs';

export const getPosts = async () => {
  const response = await axios.get(POST_URL);
  return response.data;
};

export const createPost = async (post) => {
  const response = await axios.post(POST_URL, post);
  return response.data;
};

export const updatePost = async (post) => {
  const response = await axios.put(`${POST_URL}/${post.id}`, post);
  return response.data;
};

export const deletePost = async (id) => {
  const response = await axios.delete(`${POST_URL}/${id}`);
  return response.data;
};

export const postsServices = {
  getPosts,
  createPost,
  updatePost,
  deletePost,
};

export default postsServices;
