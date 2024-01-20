import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        
        <Route path="/" element={<Header />}>
        </Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
