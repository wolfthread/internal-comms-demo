import React from 'react';
import { Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Homepage from '../pages/Homepage';
import Features from '../pages/Features';
import GetStarted from '../pages/GetStarted';
import Dashboard from '../pages/Dashboard';
import Tickets from '../pages/Tickets';
import Users from '../pages/Users';
import Departments from '../pages/Departments';
import Admin from '../pages/Admin';
import history from '../history';

const App = () => {
  return (
    <Router history={history}>
      <div className="ui container">
        <Navbar />
        <Route path="/" exact component={Homepage} />
        <Route path="/features" exact component={Features} />
        <Route path="/get-started" exact component={GetStarted} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/tickets" exact component={Tickets} />
        <Route path="/users" exact component={Users} />
        <Route path="/departments" exact component={Departments} />
        <Route path="/admin" exact component={Admin} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
