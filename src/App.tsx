import React from "react";
import { Routes, Route } from "react-router-dom";
import { SideBar } from "./components/SideBar/SideBar";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import { Education } from "./pages/Education";
import { Home } from "./pages/Home";
import { Portfolios } from "./pages/Portfolios";
import Service from "./pages/Service";

function App() {
  return (
    <div className="flex">
      <div className="flex-[2]"></div>
      <div className="flex-[8]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/education" element={<Education />} />
          <Route path="/porfolios" element={<Portfolios />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <SideBar />
    </div>
  );
}

export default App;
