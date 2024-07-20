import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Puja from "./components/Puja";
import Temple from "./components/Temple";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/puja" element={<Puja />} />
        <Route path="/temple" element={<Temple />} />
      </Routes>
    </Router>
  );
}

export default App;
