import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import CompetitionsPage from './pages/CompetitionsPage';
import ContactPage from './pages/ContactPage';
import PaymentPage from './pages/PaymentPage';
import TermsPage from './pages/TermsPage';
import './styles/main.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/competitions" element={<CompetitionsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/payments" element={<PaymentPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;