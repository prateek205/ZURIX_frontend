import React from "react";
import { useGetProfileQuery } from "../redux/authApi";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const { data, isLoading, isError } = useGetProfileQuery();

  if (isLoading) {
    return (
      <div className="flex items-center justify-cneter h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (isError || !data?.success) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoutes;
