import { Link } from "react-router-dom";
import { encodeTaskStatus } from "../utils/encodeTaskStatus";

function SingleTask({ data }) {
  return (
    <div>
      <Link to={"task/" + data.id}>
        <h2>{data.title}</h2>
      </Link>
      <p>{data.description}</p>
      <button>{encodeTaskStatus(data.status)}</button>
    </div>
  );
}

export default SingleTask;
