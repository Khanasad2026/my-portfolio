import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import { portfolioData } from './data/portfolioData';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header personalInfo={portfolioData.personalInfo} />
      <Home portfolioData={portfolioData} />
    </div>
  );
}

export default App;