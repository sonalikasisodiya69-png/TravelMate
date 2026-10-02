/*import logo from './logo.svg';
import image from "./assets/image.jpg";
import Greet from './Components/Greet';


function App() {
  return (
    <>
      <Greet course="React" campus="Bhawarkua" photo={logo}/>
      <Greet course="SQL" campus="VijayNagar" photo={logo}/>
      <Greet course="Python" campus="Ujjain" photo={image}/>
      <Greet course="React" campus="Vadodara" photo={image}/>
        </>
  );
}

export default App; */

/*import React from "react";
import Product from "./Components/Product";
import Laptopimage from "./assets/Laptop.png";
import  Mobileimage from "./assets/Mobile.png";
import Headphonesimage from "./assets/Headphones.png";

function App() {
  return (
    <div>
      <h1>Product Details :</h1>

    <div className="product-container">

      <Product
        feature="Dell 15 Laptop"
        rating="4.7 ⭐⭐⭐⭐⭐"
        price={50000}
        brand="Dell"
        image={Laptopimage}
      />

      <Product 
        feature="OnePlus Nord CE6 5G"
        rating="5.0⭐⭐⭐⭐⭐"
        price={30000}
        brand="Samsung"
        image={Mobileimage}
      />

      <Product
        feature="Boat Rockerz 412 Wireless Headphones"
        rating="4.5⭐⭐⭐⭐"
        price={2500}
        brand="Boat"
        image={Headphonesimage}
      />
    </div>
    </div>
  );
}

export default App;*/

/*import React from "react";
import Navigation from "./Components/Navigation";
import HeroSection from "./Components/Hero";
import Shoesimg from  "./assets/Shoes.png";

function App() {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <img src={Shoesimg} alt="Hero" />
    </div>
  );
}

export default App;*/
/*
import StateHook from './Components/StateHook';
import SmartCounter from "./Components/Task1";
import AgeCalculator from "./Components/Task2";
import LoginForm from "./Components/Task3";
import ProductQuantity from "./Components/Task4";
import CharacterCounter from "./Components/Task5";
import TemperatureConverter from "./Components/Task6";
import Studentresult from "./Components/Task7";
import TrafficLight from './Components/Task8';
import Balance from './Components/Task9';
import ShoppingCart from './Components/Task10';
import Visibility from './Components/Visibilty';
import Bulb from './Components/Bulb';
import Arr from './Components/Array';
function App() {
  return (
    <div>
      <StateHook />
      <TemperatureConverter />
      <Studentresult />
      <SmartCounter />
      <AgeCalculator />
      <LoginForm />
      <ProductQuantity />
      <CharacterCounter />
      <TrafficLight />
      <Balance />
      <ShoppingCart />
      <Visibility />
      <Bulb />
      <Arr />
    </div>
  );
} 
export default App;*/

/*import "./App.css";
import Navbar from "./Portfolio/Navbar";
import Hero from "./Portfolio/Hero";
import About from "./Portfolio/About";
import Skills from "./Portfolio/Skills";
import Projects from "./Portfolio/Projects";
import Contact from "./Portfolio/Contact"; 
import Footer from "./Portfolio/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;*/
/*import EmployeeDashBoard from "./Components/EmployeeDashBoard";
import "./App.css";

function App() {
  return <EmployeeDashBoard />;
}

export default App;*/
/*import MovieNavbar from "./Components/MovieNavbar";
import Home from "./Pages/Home";
import MovieDetails from "./Pages/MovieDetails";
import TopRated from "./Pages/TopRated";
import Upcoming from "./Pages/Upcoming";
import Popular from "./Pages/Popular";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
function App() {
  return (
    <BrowserRouter>
      <MovieNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route
          path="/top-rated"
          element={<TopRated />}
        />

        <Route
          path="/upcoming"
          element={<Upcoming />}
        />

    
      </Routes>
    </BrowserRouter>
  );
}

export default App;*/
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/TravelMate/Navbar";

import Home from "./TravelPages/Home";


function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        
        
      </Routes>

    </BrowserRouter>
  );
}

export default App;