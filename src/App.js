import React, { useState, useEffect } from "react";

import Navbar from "./Components/Navbar";
import SocailTab from "./Components/SocailTab";

import Skills from "./Screens/SkillsPage";
import EducationPage from "./Screens/EducationPage";
import AboutPage from "./Screens/AboutPage";
import ExperiencesPage from "./Screens/ExperiencesPage";
import ReferencePage from "./Screens/ReferencePage";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import * as Colors from "./Assets/Color";
import * as mesage from "./Assets/massage";

import "./App.css";

export default () => {
  const [isDarkMode, setIsDarkMode] = useState(() => true);
  const [isEnglish, setIsEnglish] = useState(() => true);

  isDarkMode
    ? (document.body.style.backgroundColor = Colors.darkBlackound)
    : (document.body.style.backgroundColor = Colors.lightBlackound);
  isDarkMode
    ? (document.body.style.color = Colors.lightText)
    : (document.body.style.color = Colors.darkText);

  return (
    <Router>
      <Navbar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        isEnglish={isEnglish}
        setIsEnglish={setIsEnglish}
      />
      <div className={"content"}>
        <Switch>
          <Route path="/profile/experiences">
            <ExperiencesPage isEnglish={isEnglish} />
          </Route>
          <Route path="/profile/education">
            <EducationPage isEnglish={isEnglish} />
          </Route>
          <Route path="/profile/skill">
            <Skills isEnglish={isEnglish} />
          </Route>
          <Route path="/profile/reference">
            <ReferencePage isEnglish={isEnglish} />
          </Route>
          <Route path="/profile/about" strict>
            <AboutPage isEnglish={isEnglish} />
          </Route>
          <Route path="/profile/" strict>
            <AboutPage isEnglish={isEnglish} />
          </Route>
          <Redirect to={"/profile/"} />
        </Switch>
      </div>
      <SocailTab />
    </Router>
  );
};

function Reference({ isEnglish }) {
  return isEnglish ? (
    <h2>{mesage.reference.en}</h2>
  ) : (
    <h2>{mesage.reference.th}</h2>
  );
}
