import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/search" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
