import React from "react";
import Sidebar from "../Component/Layout/Sidebar/Sidebar";
import Header from "../Component/Layout/Header/Header";
import PageRoutes from "../Component/Layout/PageRoutes/PageRoutes";
import { Navigate, Outlet } from "react-router-dom";

function DefaultLayout() {
  const token: any = localStorage.getItem("token");
  return (
    <>
      {token ? (
        <>
          <Header />
          <Sidebar />
          <div className="p-0 sm:ml-64" style={{ marginTop: "105px" }}>
            <Outlet />
          </div>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}

export default DefaultLayout;
