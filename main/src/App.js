import { BrowserRouter as Router } from "react-router-dom";

import Header from "./component/header/Header.js";
import Main from "./component/main/Main.js";

import './App.css';


function App() {
  return (
      <Router>
          <Header/>
          <Main/>
      </Router>
  );
}

export default App;
