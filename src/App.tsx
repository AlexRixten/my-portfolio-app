import React from "react";
import { Routes, Route } from "react-router-dom";
import { AboutMe } from "./components/aboutMe/AboutMe";
import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/NavBar";
import { SideBar } from "./components/SideBar/SideBar";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import { Education } from "./pages/Education";
import { Home } from "./pages/Home";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Portfolios } from "./pages/Portfolios";
import {Service} from "./pages/Service";

import style from './sass/components/App.module.scss';

function App() {
  return (
    <>
      <NavBar />
      <div className="flex">
        <AboutMe />
        <div className={style.mainWrapper}>
          <div className={style.container}>
            <div className={style.mainContainer}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/service" element={<Service />} />
                <Route path="/education" element={<Education />} />
                <Route path="/porfolios" element={<Portfolios />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </div>
            <div className={style.footer}>
              <Footer />
            </div>
          </div>
        </div>
        <SideBar />
      </div>
    </>
  );
}

export default App;
