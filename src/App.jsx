import React from 'react';
import MainLayout from './layouts/MainLayout';
import Home from './components/Home';
import ListingsContainer from './components/Listings';
import RegisterContainer from './components/Register';
import LoginContainer from './components/Login';
import AddJobContainer from './components/AddJob';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path='/'
        element={<MainLayout />}
      >
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/register'
          element={<RegisterContainer />}
        />
        <Route
          path='/login'
          element={<LoginContainer />}
        />
        <Route
          path='/listings'
          element={<ListingsContainer />}
        />
        <Route
          path='/create-job'
          element={<AddJobContainer />}
        />
        <Route
          path='*'
          element={<h1>404</h1>}
        />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
