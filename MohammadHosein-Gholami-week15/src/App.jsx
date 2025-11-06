import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;
