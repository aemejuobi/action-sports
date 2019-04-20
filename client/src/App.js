import React, { Component } from "react";
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';

class App extends Component {
  render() {
    return (
      <div className="as-container">
        <Navbar />
        <Router>
          <Route path="/" component={Home} />
          {/* <Route path="/calendar" component={Calendar} />
          <Route path="/buylist" component={BuyList} /> */}
        </Router>
      </div>
    );
  }
}

export default App;

