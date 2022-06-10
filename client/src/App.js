import "./App.scss";
import About from "./views/About";
import Home from "./views/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SingleTaskPage from "./views/SingleTaskPage";
import AddNewTask from "./views/AddNewTask";

function App() {
  return (
    <div className="App">
      <Navbar
        links={[
          { link: "/", label: "Home" },
          { link: "/about", label: "See About" },
          { link: "/add-new-task", label: "Add new task" },
        ]}
      />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/add-new-task" element={<AddNewTask />}></Route>
        <Route path="task/:id" element={<SingleTaskPage />} />
      </Routes>
    </div>
  );
}

export default App;
