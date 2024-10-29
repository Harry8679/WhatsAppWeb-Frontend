import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./features/userSlice";

const App = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  console.log(user);
  return (
    <div className="dark">
      {/* <button onClick={() => { dispatch(logout()) }}>Logout</button> */}
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
