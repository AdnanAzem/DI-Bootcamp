
import { useDispatch } from 'react-redux';
import { logout } from '../../features/authSlice';
import { setCookie } from '../../utils/cookieUtils'; 
const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Clear user session in Redux
    dispatch(logout());

    // Clear cookies
    setCookie('accessToken', '', -1);  // Expire the accessToken cookie
    setCookie('refreshToken', '', -1); // Expire the refreshToken cookie
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
