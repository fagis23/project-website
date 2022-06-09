import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../src/pages/home/home";
import AboutUs from "../src/pages/about/about";
import Services from "../src/pages/services/services";
import ProjectPages from "./pages/project/project";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/project" element={<ProjectPages />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
