import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Seating from "./pages/Seating";

import "./styles/main.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Seating />} />
          {/* <Route path="/book" element={<Book />} /> */}
        </Routes>
      </Router>
    </div>
  );
}
