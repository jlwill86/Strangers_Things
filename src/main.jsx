import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/store.js';
import { createBrowserRouter ,RouterProvider } from 'react-router-dom';
import PostDetials from './features/posts/PostDetails';
import PostPage from './features/posts/PostPage';
import Root from './layout/Root';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
  
  {
    path: "/",
    element: <PostPage />
  },
  {
    path: "/posts",
    element: <PostPage />
  },
  {
    path: "/posts/:id",
    element: <PostDetials />
  }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
