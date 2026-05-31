import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Dashboard from "./pages/Dashboard";
import Discussions from "./pages/Discussions";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DiscussionDetails from "./pages/DiscussionDetails";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/discussions" element={<Discussions />} />
        <Route path="/discussion" element={<DiscussionDetails />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;