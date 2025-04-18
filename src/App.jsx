  import React from 'react';
  import './index.css';
  import { Routes, Route } from 'react-router-dom';
  import { ThemeProvider } from "next-themes";
  import Navbar from './components/Navbar';
  import Footer from './components/Footer';
  import 'leaflet/dist/leaflet.css';

  import Home from './app/Home';
  import About from './app/About';
  import Admission from './app/Admission';
  import Eligibility from './app/Eligibility';
  import Forms from './app/Forms';
import Apply from './app/Apply';
import Programs from './app/Programs';
import Login from './app/admin/Login'
import Dashboard from './app/admin/Dashboard'
import Contact from './app/Contact';

  const App = () => {
    return (
      <>
      <ThemeProvider attribute="class">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/eligibility" element={<Eligibility />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/admin" element={<Login />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
        <Footer />
        </ThemeProvider>
      </>
    );
  };

  export default App;






