import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import postsServices from './postsServices';

const initialState = {
  posts: [],
  error: false,
  success: false,
  loading: false,
  message: '',
};

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (_, thunkAPI) => {
    try {
      return await postsServices.getPosts();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const createPost = createAsyncThunk(
  'posts/createPost',
  async (post, thunkAPI) => {
    try {
      return await postsServices.createPost(post);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updatePost = createAsyncThunk(
  'posts/updatePost',
  async (post, thunkAPI) => {
    try {
      return await postsServices.updatePost(post);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async (id, thunkAPI) => {
    try {
      return await postsServices.deletePost(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.success = false;
      state.error = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.loading = true;
      state.success = false;
      state.error = false;
      state.message = '';
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = false;
      state.message = '';
      state.posts = action.payload;
    });
    builder.addCase(getPosts.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = true;
      state.message = action.payload;
    });
  },
});

export const { reset } = postsSlice.actions;

export default postsSlice.reducer;
