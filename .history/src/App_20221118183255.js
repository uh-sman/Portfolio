import "./App.css";
import { Index } from "./components/index";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import "animate.css";
function App() {
  return (
    <div className="App">
      <Index />
      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
