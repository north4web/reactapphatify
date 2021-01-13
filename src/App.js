import React from 'react'
import Home from '../src/Home/Home'
import About from '../src/Home/Header/About/About'
import Contact from '../src/Home/Header/Contact/Contact'
import { BrowserRouter, Route, Link } from "react-router-dom";



function App() {

  
    return (


      <BrowserRouter>

        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />

      </BrowserRouter>

    )
  }


export default App;
