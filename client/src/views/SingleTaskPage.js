import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getTasks } from "../state/reducers";
import SingleTaskManager from "../components/SingleTaskManager";

function SingleTaskPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const tasksFromStore = useSelector((state) => state.tasks.list);
  const isLoading = useSelector((state) => state.tasks.loading);

  useEffect(() => {
    dispatch(getTasks());
  }, []);

  const getTaskById = () => {
    return tasksFromStore.filter((task) => task._id === params.id);
  };

  return (
    <div>
      <div className="tasks-list">
        {!isLoading &&
          getTaskById().map((task) => (
            <SingleTaskManager data={task} key={task._id} />
          ))}
      </div>
    </div>
  );
}

export default SingleTaskPage;
