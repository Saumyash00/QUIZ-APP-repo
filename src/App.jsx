import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Login from './components/Login';
import Scorecard from './components/Scorecard';
import TopicSelector from './components/TopicSelector';
import QuizQuestion from './components/QuizQuestion';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/login" element={<Login />} />
          <Route path="/questions" element={<QuizQuestion />} />
          <Route path="/score" element={<Scorecard />} />
          <Route path="/topics" element={<TopicSelector />} />
        </Routes>
        <Footer /> {/* Footer added here */}
      </div>
    </Router>
  );
}

export default App;
