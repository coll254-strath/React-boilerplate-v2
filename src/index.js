import React  from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Nopage from "./pages/Nopage";
import Car from "./pages/Component1";
import Success from "./pages/Success";
import Garage from "./React";


export default function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}/>
      <Route index element={<Home />}/>
      <Route path="/Home" element={<Home />}/>
      <Route path="Blogs" element={<Blogs />}/>
      <Route path="Contact" element={<Contact />}/>
      <Route path="Success" element={<Success />}/>
      <Route path="*" element={<Nopage />}/>
      <Route path="Component1" element={<Car />}/>
      <Route path="React" element={<Garage />}/>
    </Routes>
    </BrowserRouter>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <App />);
 
