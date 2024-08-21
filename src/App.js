// import './App.css';
import React from "react";
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home';
import { Nav } from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />
//   }
// ])

function App() {
  return (
    <div className="">
      <Nav />
      
      <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Route>
      </Routes>
    </Router>

        
    
    </div>
  );
}

export default App;
