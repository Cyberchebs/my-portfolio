import Navbar from "./components/Navbar";
import "./App.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Cta from "./components/Cta";

function App() {
  return (
   <div className="flex gap-0 flex-col items-center">
  <Navbar />
  <div className="  w-full scroll-smooth ">
      <Header />
    
    
      <Skills />
    
    
      <Projects />
  

      <Cta />
  
  </div>
</div>
  )
}

export default App;
