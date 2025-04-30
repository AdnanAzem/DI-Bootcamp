import React from "react";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/authSlice";
import { RootState } from "../../app/store";
import Cookies from "js-cookie";

const Navbar: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-xl font-bold">{user?.username ?? "Story App" }</h1>
      <div className="space-x-4">
        
        {user ? (
          <>
          <Link to="/">Home</Link>
            <button
              onClick={() => navigate("/create")}
              className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Create Story
            </button>
            <Link to="/add-contributor" className="btn btn-primary">
              Add Contributor
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-700"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
