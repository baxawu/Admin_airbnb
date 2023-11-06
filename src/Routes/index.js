import { createBrowserRouter } from 'react-router-dom';

import RootAdmin from '../modules/RootAdmin';
import ErrorBoundary from '../components/ErrorBoundary';
import NotFound from '../components/NotFound';

import GetUsers from '../modules/RootAdmin/User/GetUsers'
import GetRooms from '../modules/RootAdmin/Room/GetRooms'
import GetBookings from '../modules/RootAdmin/Booking/GetBookings'
import GetComments from '../modules/RootAdmin/Comment/GetComments'
import GetLocations from '../modules/RootAdmin/Location/GetLocations'

import AddUser from '../modules/RootAdmin/User/AddUser'
import AddRoom from '../modules/RootAdmin/Room/AddRoom'
import AddBooking from '../modules/RootAdmin/Booking/AddBooking'
import AddComment from '../modules/RootAdmin/Comment/AddComment'
import AddLocation from '../modules/RootAdmin/Location/AddLocation'

import Login from '../modules/Auth/Login/Login';
import Protected from './Protected';

export const routes = createBrowserRouter([
    {
        path: '/', element: <Login />
    },
    
    {
        path: '/admin',
        element: 
            <RootAdmin />
        ,
        errorElement: <ErrorBoundary />,
        children: [
            

            // User
            { path: "/admin/users", element: <GetUsers /> },
            { path: "/admin/addUser", element: <AddUser /> },
            //{ path: "/admin/users/:id", element: <UserId /> },

            // Room
            { path: "/admin/rooms", element: <GetRooms /> },
            { path: "/admin/addRoom", element: <AddRoom /> },

            // Booking
            { path: "/admin/bookings", element: <GetBookings /> },
            { path: "/admin/addBooking", element: <AddBooking /> },

            // Comment
            { path: "/admin/comments", element: <GetComments /> },
            { path: "/admin/addComment", element: <AddComment /> },

            // Location
            { path: "/admin/locations", element: <GetLocations /> },
            { path: "/admin/addLocation", element: <AddLocation /> },
        ]
    },
    { path: "*", element: <NotFound /> },
])
