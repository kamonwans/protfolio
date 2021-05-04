import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'

//Content
import Home from './conent/Home'
import About from './conent/About'
import Education from './conent/Education'
import Skills from './conent/Skills'
import Contact from './conent/Contact';

function App() {
  return (
    <Router>
     <div className="App">
     <Navbar/>
     <Route exact path="/">
       <Home />
     </Route>

     <Route exact path="/about">
       <About />
     </Route>

     <Route exact path="/education">
       <Education />
     </Route>

     <Route exact path="/skills">
       <Skills />
     </Route>  

     <Route exact path="/contact">
       <Contact />
     </Route> 

     </div>

    </Router>
  );
}

export default App;
