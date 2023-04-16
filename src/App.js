import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Tokenomics from './components/Tokenomics/Tokenomics';
import Roadmap from './components/Roadmap/Roadmap';
import Team from './components/Team/Team';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import ProjectInfo from './components/ProjectInfo/ProjectInfo';
import CountdownTimer from './components/CountdownTimer/CountdownTimer';
import CompanyLogos from './components/CompanyLogos/CompanyLogos';
import InvestmentCalculator from './components/InvestmentCalculator/InvestmentCalculator';
import LandingPage from './LandingPage';


function App() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleEmailSubmit = (email) => {
    console.log('Email submitted:', email);
    setEmailSubmitted(true);
  };

  return (
    <Router>
      <div className="App">
        {!emailSubmitted ? (
          <LandingPage onEmailSubmit={handleEmailSubmit} />
        ) : (
          <>
            <Navbar />
            <RouteWrapper />
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

function RouteWrapper() {
  const location = useLocation();
  const launchDate = new Date('2023-05-01T00:00:00');

  return (
    <>
      {location.pathname === '/' && <Hero />}
      <Routes>
        <Route
          path="/"
          element={
            location.pathname === '/' && (
              <>
                <CountdownTimer targetDate={launchDate} />
                <ProjectInfo />
                <InvestmentCalculator />
                <Contact />
                <CompanyLogos />
              </>
            )
          }
        />
        <Route path="/tokenomics" element={<Tokenomics />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/team" element={<Team />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </>
  );
}

export default App;
