import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main/Main';
import Login from './Account/Login';
import SignUp from './Account/SignUp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [{
      path: "/login",
      element: <Login></Login>,
    },
    {
      path: "/signup",
      element: <SignUp></SignUp>
    }]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl mx-auto bg-base-200'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
)
