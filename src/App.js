import './App.css';
import './components/css/style.css';
import Navbar from './components/modules/navbar';
import Footer from './components/modules/footer';
import Banner from './components/modules/banner';
import React from "react";
import {
  BrowserRouter as Router,
  Routers,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
      <Navbar/>
        <Routers>
          <Route path="./components/modules/banner">
            <About />
          </Route>
          <Route path="/">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Routers>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
