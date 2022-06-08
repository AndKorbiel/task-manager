import { useEffect, useState } from "react";
import FilterBars from "../components/FiltersBar";
import SingleTask from "../components/SingleTask";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [selectedTasks, selectTasks] = useState([]);
  const [selectedFilters, setFilters] = useState([]);

  const applyFilter = (selectedStatus) => {
    const temp = [...tasks];
    let filters = [...selectedFilters];
    let res = [];

    if (selectedFilters.indexOf(selectedStatus) > -1) {
      filters = filters.filter((el) => el !== selectedStatus);
    } else {
      filters.push(selectedStatus);
    }

    filters.forEach((filter) => {
      const result = temp.filter((task) => task.status === filter);
      res = [...res, ...result];
    });

    if (selectedStatus === false) {
      res = tasks;
      filters = [];
    }

    setFilters(filters);
    selectTasks([...res]);
  };

  const searchByKeyword = (e) => {
    const temp = [...tasks];
    const res = temp.filter((task) =>
      task.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    selectTasks([...res]);
  };

  useEffect(() => {
    fetch("/data")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        selectTasks(data);
      });
  }, []);

  return (
    <div>
      <FilterBars
        applyFilter={applyFilter}
        selectedFilters={selectedFilters}
        statuses={[0, 1, 2]}
        searchByKeyword={searchByKeyword}
      />
      <div className="tasks-list">
        {selectedTasks.length > 0 &&
          selectedTasks.map((task) => <SingleTask key={task.id} data={task} />)}
      </div>
    </div>
  );
}

export default Home;
