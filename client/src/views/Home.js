import { useEffect, useState } from "react";
import FilterBars from "../components/FiltersBar";
import SingleTask from "../components/SingleTask";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../state/reducers";

function Home() {
  const dispatch = useDispatch();
  const tasksFromStore = useSelector((state) => state.tasks.list);
  const isLoading = useSelector((state) => state.tasks.loading);
  const [selectedTasks, selectTasks] = useState([]);
  const [activeFilter, setActiveFilter] = useState(false);
  const [selectedFilters, setFilters] = useState([]);

  useEffect(() => {
    dispatch(getTasks());
  }, []);

  const searchByKeyword = (e) => {
    const temp = [...tasksFromStore];
    const keyword = e.target.value;
    let filter = true;
    const res = temp.filter((task) =>
      task.title.toLowerCase().includes(keyword.toLowerCase())
    );
    if (keyword.length === 0) {
      filter = false;
    }
    setActiveFilter(filter);
    selectTasks([...res]);
  };

  const applyFilter = (selectedStatus) => {
    const temp = [...tasksFromStore];
    let filters = [...selectedFilters];
    let res = [];
    let filter = true;

    if (selectedFilters.indexOf(selectedStatus) > -1) {
      filters = filters.filter((el) => el !== selectedStatus);
    } else {
      filters.push(selectedStatus);
    }

    filters.forEach((filter) => {
      const result = temp.filter((task) => task.status === filter);
      res = [...res, ...result];
    });

    if (selectedStatus === false || filters.length === 0) {
      res = tasksFromStore;
      filters = [];
      filter = false;
    }

    setActiveFilter(filter);
    setFilters(filters);
    selectTasks([...res]);
  };

  return (
    <div>
      <FilterBars
        statuses={[0, 1, 2]}
        searchByKeyword={searchByKeyword}
        applyFilter={applyFilter}
        selectedFilters={selectedFilters}
      />
      <div className="tasks-list">
        {!isLoading &&
          !activeFilter &&
          tasksFromStore.map((task) => (
            <SingleTask key={task._id} data={task} />
          ))}
        {activeFilter &&
          selectedTasks.map((task) => (
            <SingleTask
              key={task._id}
              data={task}
              activeFilter={activeFilter}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
