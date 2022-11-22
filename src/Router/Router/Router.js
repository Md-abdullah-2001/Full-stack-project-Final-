import { createBrowserRouter } from "react-router-dom";

import MainAppointment from "../../Components/Appointment/MainAppointment";
import LoginReact from "../../Components/Authentication/Login/LoginReact";
import Signup from "../../Components/Authentication/Signup";
import AddDoctor from "../../Components/DashBoard/AddDoctor/AddDoctor";
import AllUsers from "../../Components/DashBoard/DashBoard/AllUsers/AllUsers";
import DashBoard from "../../Components/DashBoard/DashBoard/DashBoard";
import DashBoardRoute from "../../Components/DashBoard/DashBoardRoute";
import Doctors from "../../Components/DashBoard/Doctors";
import MyDashboard from "../../Components/DashBoard/MyDashboard/MyDashboard";
import Home from "../../Components/Home/Home";
import Main from "../../Layout/Main/Main";
import Payment from "../../Payment/Payment";
import AdminRoute from "../../PrivateRoute/AdminRoute";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";
import ErrorElement from "./ErrorElement";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/appointment", element: <MainAppointment></MainAppointment> },
      { path: "/login", element: <LoginReact></LoginReact> },
      { path: "/signup", element: <Signup></Signup> },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <ErrorElement></ErrorElement>,
    element: (
      <PrivateRoute>
        <DashBoardRoute></DashBoardRoute>
      </PrivateRoute>
    ),
    children: [
      { path: "/dashboard", element: <MyDashboard></MyDashboard> },
      {
        path: "/dashboard/users",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addDoctor",
        element: (
          <AdminRoute>
            <AddDoctor></AddDoctor>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/doctors",
        element: (
          <AdminRoute>
            <Doctors></Doctors>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: (
          <AdminRoute>
            <Payment></Payment>
          </AdminRoute>
        ),
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/bookings/${params.id}`);
        },
      },
    ],
  },
]);
