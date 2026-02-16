import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import Services from "../components/Services";
import "../index.css";


function App() {
  return (
    <div className="w-full bg-[#030303]">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
