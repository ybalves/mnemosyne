import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import NewMemory from "./pages/home/new-memory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/new-memory" element={<NewMemory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
