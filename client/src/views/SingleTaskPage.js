import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../state/reducers";

function SingleTaskPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const tasks = [];
  const countFromStore = useSelector((state) => state.counter.value);

  useEffect(() => {
    console.log(params.id);
  }, []);

  const getTaskById = () => {
    return tasks.filter((task) => task.id === params.id)[0];
  };

  return (
    <div>
      <h2>HellO!</h2>
      <h3>{countFromStore}</h3>
      <button onClick={() => dispatch(increment())}>Click me!</button>
    </div>
  );
}

export default SingleTaskPage;
