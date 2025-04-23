import Navbar from "./components/Navbar";
import "./App.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Cta from "./components/Cta";

function App() {
  return (
    <div className="flex justify-center">
      <Navbar />
      <div>
        <Header />
        <Skills />
        <p className="text-4xl">yvjukkmlkmlk</p>
        <Projects />
        <Cta />
      </div>
    </div>
  );
}

export default App;
