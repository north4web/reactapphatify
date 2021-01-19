import React from 'react'
import Home from '../src/Home/Home'
import About from './Home/About/About'
import Contact from './Home/Contact/Contact'
import { BrowserRouter, Route, Link } from "react-router-dom";
import SignIn from '../src/Home/Header/Signin/Signin'
import Dashboard from '../src/Home/Dashboard/Dashboard'



function App() {

  
    return (


      <BrowserRouter>

        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/SignIn" component={SignIn} />
        <Route exact path="/Dashboard" component={Dashboard} />

      </BrowserRouter>

    )
  }


export default App;
