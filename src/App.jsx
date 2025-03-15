import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Events from './Components/Events';
import AboutPage from './Components/About';
function MyApp() {

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className={`flex-grow mt-14`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <footer className="bg-gray-800 text-white py-4 text-center">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} Communion App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

const App = () => {
  return (
    <Router>
      <MyApp />
    </Router>
  );
}

export default App;
