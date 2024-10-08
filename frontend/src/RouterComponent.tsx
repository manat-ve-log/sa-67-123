import React, { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './app';
import Login from './authentication/login/login';
import BookingList from './food_service/pages/booking_list/BookingList';
import Structure from './food_service/pages/structure/Structure';
import Edit from './food_service/pages/edit/Edit';
import Create from './food_service/pages/create/Create';
import Home from './employee/Home';
import Payment from './payment/payment';
import Receipt from './payment/receipt/receipt';
import SignUpPages from './authentication/register/SignUpPages';
import Booking from './room/booking/pages/booking';
import CustomerCreate from './room/customer';
import UserCreate from './employee/UsersCreate';
import UsersUpdate from './employee/UsersUpdate';
import MeetingRoom from './meeting_room/page/MeetingRoom/Meeting_Room';
import BookingMeetingRoom from './meeting_room/page/Booking/index';
import Dashboard from './meeting_room/page/Dashboard/Dashboard';

const RouterComponent: React.FC = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login />, // เส้นทางหลักคือหน้า Login
    },
    {
      path: '/signup',
      element: <SignUpPages />, // เส้นทางหลักคือหน้า Login
    },
    {
      path: '/login',
      element: <App />, // เส้นทางหลังจาก login สำเร็จ
      children: [
        { path: 'dashboard', element: <Dashboard/> },

        // Room
        { path: 'room', 
          element: <Booking /> 
        },
        { path: 'customer', 
          element: <CustomerCreate /> 
        },

        // Food Service
        {
          path: 'food-service',
          element: <BookingList />,
        },
        {
          path: 'food-service/structure/:bookingID',
          element: <Structure />,
        },
        { path: 'manage-data', 
          element: <Edit /> 
        },
        { path: 'manage-data/create-menu', 
          element: <Create /> 
        },
        //Meeting Rooms
        { path: 'meeting-rooms', 
          element: <MeetingRoom /> 
        },{ path: 'booking-meeting-rooms', 
          element: <BookingMeetingRoom /> 
        },

        // Employee
        { path: 'employee', element: <Home /> },
        { path: 'employee/create', element: <UserCreate /> },
        { path: 'employee/update/:id', element: <UsersUpdate /> },

        // Payment
        { path: 'payment', element: <Payment /> },
        { path: 'receipt', element: <Receipt /> },
        { path: 'logout', element: <h2>Logout</h2> },
        { path: '*', element: <h2>404 - Not Found</h2> }, // เส้นทาง 404 สำหรับเส้นทางที่ไม่พบ
      ],
    },
  ]);

  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
};

export default RouterComponent;
