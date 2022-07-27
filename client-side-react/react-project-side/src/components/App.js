import '../App.css';
import React from 'react'
import {
  BrowserRouter as Router, Route} from 'react-router-dom';
import ManagerPage from './managerPage'
import UserPage from './userPage'


function App() {
  return (
    <Router>
        <Route path='/' exact> 
          <ManagerPage/>
        </Route>
        <Route path='/:id' > 
          <UserPage/>
        </Route>
    </Router>
  );
}

export default App;
