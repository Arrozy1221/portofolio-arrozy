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
        <main className="page-shell">
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
        </main>
      </LangProvider>
    </ThemeProvider>
  );
}
