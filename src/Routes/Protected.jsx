import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { logout } from "../services/Slices/authSlice";

const Protected = ({ children }) => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.authSlice);
  
  if (!user) {
    alert("Tài Khoản Không Tồn Tại");
    return <Navigate to="/" />;
  }
  
  if (user.user.role !== "ADMIN") {
    alert("Not Admin");
    dispatch(logout());
    return ;
  }

  return children

};

export default Protected;
