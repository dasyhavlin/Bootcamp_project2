import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import About from './componnents/About'
import HomePage from './componnents/HomePage'
import  Edit  from './componnents/Edit'

const routes = [
  {
    route: 'about',
    Component: About,
    name: 'About',
  }, 
  {
    route: 'homePage',
    Component: HomePage,
    name: 'HomePage',
  }, 
  {
    route: 'edit',
    Component: Edit,
    name: 'Edit',
  }];
  
function App() {
    return (
      <div className="App">
         <menu>
          <ul>
            { routes.map(route => <li key={route.route}> <Link to={route.route}> { route.name } </Link> </li>) }
          </ul>        
        </menu>
        
        <div>
          
          <Routes>
            <Route path="about" element={<About />} />
            <Route path="homePage" element={<HomePage />} >
            <Route path=":editId" element={<Edit /> } />
            </Route>
            </Routes>  
        </div> 
      </div>
    );
  }
  
  export default App;
