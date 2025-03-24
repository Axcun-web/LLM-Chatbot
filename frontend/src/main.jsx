import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


import HomePage from "./pages/HomePage";
import ExplorePage from "./pages/ExplorePage";
import BuildPage from "./pages/BuildPage";
import CommunityPage from "./pages/CommunityPage";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/explore">Explore</Link></li>
            <li><Link to="/build">Build</Link></li>
            <li><Link to="/community">Community</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/build" element={<BuildPage />} />
          <Route path="/community" element={<CommunityPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
