import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

const queryClient = new QueryClient()

import Main from './Layout/Main/Main';
import Login from './Account/Login';
import SignUp from './Account/SignUp';
import AuthProvider from './Provider/AuthProvider';
import Home from './Home/Home/Home';
import Classes from './Pages/Classes/Classes';
import Instructors from './Pages/Instructors/Instructors';
import Error from './Pages/404/Error';
import Dashboard from './Dashboard/Dashboard';
import MyClasses from './Dashboard/MyClasses/MyClasses';
import EnrolledClasses from './Dashboard/EnrolledClasses/EnrolledClasses';
import PaymentHistory from './Dashboard/PaymentHistory/PaymentHistory';
import Allusers from './Dashboard/Admin/Allusers';
import ManageClasses from './Dashboard/Admin/ManageClasses';

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
    },

    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [{
      path: "/dashboard/myClasses",
      element: <MyClasses></MyClasses>
    },
    {
      path: "/dashboard/enrolledClasses",
      element: <EnrolledClasses></EnrolledClasses>
    },
    {
      path: "/dashboard/paymentHistory",
      element: <PaymentHistory></PaymentHistory>
    },
    {
      path: "/dashboard/allUsers",
      element: <Allusers></Allusers>
    },
    {
      path: "/dashboard/manageClasses",
      element: <ManageClasses></ManageClasses>
    }
    ]
  },
  {
    path: "*",
    element: <Error></Error>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl mx-auto bg-base-200'>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </AuthProvider>
    </div>
  </React.StrictMode>
)
