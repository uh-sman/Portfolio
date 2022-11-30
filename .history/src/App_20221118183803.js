import "./App.css";
import { Index } from "./components/index";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import "animate.css";
import Projects from "./components/Projects";
import Services from "./components/Services";
function App() {
  return (
    <div className="App">
      <Index />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/" element={<Projects />} />
        <Route path="/" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
