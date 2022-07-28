import "../css/App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ManagerPage } from "./managerPage";
import { UserPage } from "./userPage";
import { HomePage } from "./homePage";

export default function App() {
  return (
    <div>
    <Router>
        <Route path='/' exact> <HomePage/></Route>
        <Route path='/managerPage' ><ManagerPage/></Route>
        <Route path='/userPage/:id' ><UserPage/></Route>
    </Router>
    </div>
    
  );
}


/*  <Router>
      <Routes>
        <Route path="*" element={<h1>Don't found this page</h1>} />
        <Route path="/" element={<HomePage />} />
        <Route path="/managerPage" element={<ManagerPage />} />
        <Route path="/userPage/:id" element={<UserPage />} />
      </Routes>
    </Router>  */