import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Template from "./Template";

function RoutesPages() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Template />} />
      </Routes>
    </Router>
  );
}

export default RoutesPages;