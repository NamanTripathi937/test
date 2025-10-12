import {Routes , Route ,Navigate} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import Login from "./pages/Login";
// import { GoogleOAuthProvider } from '@react-oauth/google';
function App() {
  return (
    <>
    {/* <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}> */}
      <Routes>
        <Route path='/' element={
          <ProtectedRoutes>
            <HomePage />
          </ProtectedRoutes>
          } />
          
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
      {/* </GoogleOAuthProvider> */}
    </>
  );
}
export function ProtectedRoutes(props){
  if(localStorage.getItem('user')){
    return props.children
  }else{
    return <Navigate to="/login" />;
  }
}

export default App;
