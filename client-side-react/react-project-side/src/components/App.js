import "../css/App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { BasicTable } from "./managerPage";
import { UserPage } from "./userPage";
import { HomePage } from "./homePage";
import {PrimarySearchAppBar} from "./menu"
import { DenseTable } from "./user.diary";

export default function App() {
  return (
    <div>
    <Router> 
        <Route path="" ><PrimarySearchAppBar/></Route>
        <Route path='/' exact> <HomePage/></Route>
        <Route path='/managerPage' ><BasicTable/></Route>
        <Route path='/userPage/:id' ><UserPage/></Route>
        <Route path='/:id/diary' ><DenseTable/></Route>

    </Router>
    </div>
    
  );
}


/*  <Router>
      <Routes>
        <Route path="*" element={<h1>Don't found this page</h1>} />
        <Route path="/" element={<HomePage />} />
        <Route path="/managerPage" element={<ManagerPage />} />
        <Route path="/userPage/id" element={<UserPage />} />
      </Routes>
    </Router>  */