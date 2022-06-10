import { Link } from "react-router-dom";
import { encodeTaskStatus } from "../utils/encodeTaskStatus";
import { useDispatch } from "react-redux";
import { removeTask } from "../state/reducers";

function SingleTask({ data, activeFilter }) {
  const dispatch = useDispatch();
  return (
    <div>
      <Link to={"task/" + data.id}>
        <h2>{data.title}</h2>
      </Link>
      <p>{data.description}</p>
      <button
        onClick={() => dispatch(removeTask(data.id))}
        disabled={activeFilter ? true : false}
      >
        {encodeTaskStatus(data.status)}
      </button>
    </div>
  );
}

export default SingleTask;
