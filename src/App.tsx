import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hobbies from "./components/Hobbies";

import { useEffect } from "react";

function App() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      e.preventDefault();
    };

    document.addEventListener(
      "contextmenu",
      handler
    );

    return () => {
      document.removeEventListener(
        "contextmenu",
        handler
      );
    };
  }, []);

  return (
    <>
      {/* content */}
        <div className="bg-slate-950">
          <Header />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Hobbies />
          <Contact />
          <Footer />
        </div>
    </>
  );
}

export default App;
