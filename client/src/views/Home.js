import { useEffect, useState } from "react";
import SingleTask from "../components/SingleTask";

function Home(params) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("/data")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTasks(data);
      });
  }, []);
  return (
    <div>
      <h2>Hello from home</h2>
      <div className="tasks-list">
        {tasks.length &&
          tasks.map((task) => <SingleTask key={task.id} data={task} />)}
      </div>
    </div>
  );
}

export default Home;
