  import React from 'react';
  import './index.css';
  import { Routes, Route } from 'react-router-dom';
  import { ThemeProvider } from "next-themes";
  import Navbar from './components/Navbar';
  import Footer from './components/Footer';

  import Home from './app/Home';
  import About from './app/About';
  import Admission from './app/Admission';
  import Eligibility from './app/Eligibility';
  import Forms from './app/Forms';
import Apply from './app/Apply';
import Login from './app/admin/Login'
import Dashboard from './app/admin/Dashboard'

  const App = () => {
    return (
      <>
      <ThemeProvider attribute="class">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Home />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/eligibility" element={<Eligibility />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/admin" element={<Login />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />

        </Routes>
        <Footer />
        </ThemeProvider>
      </>
    );
  };

  export default App;






// import React from 'react'
// import './index.css'
// import About from './app/About'
// import Footer from './components/Footer'
// import Navbar from './components/Navbar'
// import { ThemeProvider } from "next-themes";
// import Admission from './app/Admission'
// import Eligibility from './app/Eligibility'
// import Forms from './app/Forms'
// import Home from './app/Home'
// const App = () => {
//   return (
//     <div>
//       <ThemeProvider attribute="class">


//        <Navbar/>
//        <Home/>
//       <About />
//       <Admission />
//       <Eligibility/>
//       <Forms/>
//        <Footer/>
//       </ThemeProvider>
//     </div>
//   )
// }

// // need to ready apply.contact.Dashboard.login

// export default App
