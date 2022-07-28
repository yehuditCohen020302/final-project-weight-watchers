import '../css/App.css';
import React from 'react'
import {BrowserRouter as Routes, Route} from 'react-router-dom';
  import ManagerPage from './managerPage'
import UserPage from './userPage'
import HomePage from './homePage';


function App() {
  return (
    <Routes>
        <Route path='/' exact>
          <HomePage/>
        </Route>
        <Route path='/managerPage'>
          <ManagerPage/>
        </Route>
        <Route path='/userPage/:id'> 
          <UserPage/>
        </Route>
    </Routes>
  );
}

export default App;
