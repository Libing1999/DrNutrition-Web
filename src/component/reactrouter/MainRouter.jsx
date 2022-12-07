import React from "react";
import RegistrationForm from "./signup page/RegistrationForm";
import LogForm from "./signin page/LogForm";
import MainContent from "./meals page/MainContent";
import { Route, Routes } from "react-router-dom";
const MainRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="signin" element={<LogForm />} />
        <Route path="home" element={<MainContent />} />
        <Route path="signin/home" element={<MainContent />} />
      </Routes>
    </div>
  );
};

export default MainRouter;
