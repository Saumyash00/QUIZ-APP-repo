import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Login from './components/Login';
import Signup from './components/Signup';
import Scorecard from './components/Scorecard';
import TopicSelector from './components/TopicSelector';
import QuizQuestion from './components/QuizQuestion';
import Footer from './components/Footer';

function AppContent() {
  const location = useLocation();
  const hideFooterRoutes = ['/questions', '/topics','/score','/signup']; // List of routes where footer should be hidden
  const showFooter = !hideFooterRoutes.includes(location.pathname);


  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />}/>
        <Route path="/questions" element={<QuizQuestion />} />
        <Route path="/score" element={<Scorecard />} />
        <Route path="/topics" element={<TopicSelector />} />
      </Routes>
      {showFooter && <Footer />} {}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
