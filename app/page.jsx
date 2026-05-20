import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import CreativeWorks from "../components/CreativeWorks";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Divider from "../components/Divider";
import ThemeProvider from "../components/ThemeProvider";
import LangProvider from "../components/LangProvider";

export default function Home() {
  return (
    <ThemeProvider>
      <LangProvider>
        {/* Ambient background blobs */}
        <div className="ambient-bg">
          <div className="ambient-blob ambient-blob-1" />
          <div className="ambient-blob ambient-blob-2" />
          <div className="ambient-blob ambient-blob-3" />
        </div>
        <div className="page-wrap">
          <Navbar />
          <Hero />
          <Divider />
          <About />
          <Divider />
          <Experience />
          <Divider />
          <Projects />
          <Divider />
          <CreativeWorks />
          <Divider />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </LangProvider>
    </ThemeProvider>
  );
}
