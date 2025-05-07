import Navbar from "./components/Navbar";
import "./App.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex gap-0 flex-col items-center ">
      <Navbar />
      <div className="flex gap-0 flex-col items-center ">
        <Header />
        <Skills />
        <Projects />
        <Cta />
      </div>
      <Footer />
    </div>
  );
}

export default App;
