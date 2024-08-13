import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Add from "./pages/Add.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<Add />} />
    </Routes>
  );
}

export default App;
