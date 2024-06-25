import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Home from './view/DashBoard/DashBoard';
import SignUp from './view/SignUp/SignUp';
import Login from './view/Login/Login';
import DashBoard from './view/DashBoard/DashBoard'
function App() {
  return ( 
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<SignUp/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/dashboard" element={<DashBoard/>}></Route>
          </Routes>
      </BrowserRouter>
    </>
   );
}

export default App;