import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import Home from "@/pages/Home/Home";
import About from "@/pages/About/About";
import Projects from "@/pages/Projects/Projects";
import Contact from "@/pages/Contact/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      return localStorage.getItem("theme") === "dark";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      darkMode
    );

    try {
      localStorage.setItem(
        "theme",
        darkMode ? "dark" : "light"
      );
    } catch {
      // Storage may not be available in some browsers.
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((current) => !current);
  };

  return (
    <div
      className="
        min-h-screen
        overflow-x-hidden
        bg-[var(--background)]
        text-[var(--text)]
        transition-colors
        duration-300
      "
    >
      <Navbar
        darkMode={darkMode}
        toggleTheme={toggleTheme}
      />

      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;