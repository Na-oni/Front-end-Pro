import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./component/header/Header";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Private_route from "./component/PrivateRoute";

import './App.css';

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Header/>}>
                  <Route path="/" element={<Private_route><Home /></Private_route>}/>
                  <Route path="/login" element={<Login/>}/>
              </Route>
          </Routes>
      </Router>
  );
}

export default App;
