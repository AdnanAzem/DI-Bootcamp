import { Routes, Route } from "react-router";
import Login from "./components/Auth/Login";
import Home from "./components/General/Home";
import PrivateRoute from "./components/General/PrivateRoute";
import "./App.css";
import Navbar from "./components/General/Navbar";
import Register from "./components/Auth/Register";
import CreateStory from "./components/Story/CreateStory";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAuthData } from "./features/authSlice";
import { loadAuthFromCookies } from "./features/authSlice";
import EditStory from "./components/Story/EditStory";
import AddContributor from "./components/Contributor/AddContributor";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const authData = loadAuthFromCookies();
    if (authData.accessToken && authData.user) {
      dispatch(setAuthData(authData));
    }
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Protect the Profile page with PrivateRoute */}
        <Route path="/" element={<PrivateRoute component={Home} />} />
        <Route
          path="/create"
          element={<PrivateRoute component={CreateStory} />}
        />
        <Route
          path="/edit/:id"
          element={<PrivateRoute component={EditStory} />}
        />
        <Route
          path="/add-contributor"
          element={<PrivateRoute component={AddContributor} />}
        />
      </Routes>
    </>
  );
}

export default App;
