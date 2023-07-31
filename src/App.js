import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  const [language, setLanguage] = useState("us");

  const changeLanguage = () => {
    if (language === "us") {
      setLanguage("br");
    } else {
      setLanguage("us");
    }
  };

  return (
    <div className="App">
      <NavBar language={language} setLanguageFunction={changeLanguage} />
      <Banner language={language} />
      <Skills language={language} />
      <Projects language={language} />
      <Contact language={language} />
      <Footer />
    </div>
  );
}

export default App;