import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import AppMain from "./AppMain";
import SignIn from "./SignIn";
import SignUp from "./signup";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<AppMain />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;