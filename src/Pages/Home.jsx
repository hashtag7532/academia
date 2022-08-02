import React from 'react';
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import Benefits from "../Components/Benefits/Benefits";

function Home() {
  return (
    <div>
        <Header />
        <Navbar />
        <Hero />
        <Benefits />
    </div>
  )
}

export default Home;