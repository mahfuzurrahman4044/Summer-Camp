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
import AuthProvider from './Provider/AuthProvider';
import Home from './Home/Home/Home';
import Classes from './Pages/Classes/Classes';
import Instructors from './Pages/Instructors/Instructors';
import Error from './Pages/404/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [{
      path: "/",
      element: <Home></Home>
    },
    {
      path: "/classes",
      element: <Classes></Classes>
    },
    {
      path: "/instructors",
      element: <Instructors></Instructors>
    },
    {
      path: "/login",
      element: <Login></Login>,
    },
    {
      path: "/signup",
      element: <SignUp></SignUp>
    }
    ],
  },
  {
    path: "*",
    element: <Error></Error>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl mx-auto bg-base-200'>
      <AuthProvider><RouterProvider router={router} /></AuthProvider>
    </div>
  </React.StrictMode>
)
