import React from 'react';
import Home from "./Pages/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        {/* <Route path="/courses" exact element={<Courses />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/team" exact element={<Team />} />
        <Route path="/pricing" exact element={<Pricing />} />
        <Route path="/journal" exact element={<Journal />} />
        <Route path="/contact" exact element={<Contact />} /> */}
      </Routes>
    </Router>
  )
}

export default App;