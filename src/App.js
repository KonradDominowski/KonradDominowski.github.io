import AboutMe from "./components/AboutMe";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Courses />
      <AboutMe />
      <Footer />
    </div>
  );
}

