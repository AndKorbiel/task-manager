import "./App.scss";
import About from "./views/About";
import Home from "./views/Home";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/about">See About</Link>
      <hr />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
