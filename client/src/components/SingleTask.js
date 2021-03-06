import { Link } from "react-router-dom";
import { encodeTaskStatus } from "../utils/encodeTaskStatus";

function SingleTask({ data }) {
  return (
    <div className="single-task">
      <Link to={"task/" + data._id}>
        <h2>{data.title}</h2>
      </Link>
      <p>{data.description}</p>
      <button>{encodeTaskStatus(data.status)}</button>
    </div>
  );
}

export default SingleTask;
