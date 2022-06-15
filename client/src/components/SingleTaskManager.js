import { encodeTaskStatus } from "../utils/encodeTaskStatus";
import { useDispatch } from "react-redux";
import { deleteTask, editTask } from "../state/reducers";
import { useState, useEffect } from "react";

function SingleTaskManager({ data }) {
  const dispatch = useDispatch();
  const [isEditing, setEditMode] = useState(false);
  const [tempTask, setTempTask] = useState({});

  const handleEditMode = () => {
    setEditMode(!isEditing);
  };

  const handleEdit = (e) => {
    const temp = { ...tempTask };
    temp[e.target.name] = e.target.value;
    setTempTask(temp);
  };

  const handleUpdate = () => {
    setEditMode(!isEditing);
    dispatch(editTask(tempTask));
  };

  useEffect(() => {
    setTempTask(data);
  }, [data]);

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={tempTask.title}
            name="title"
            onChange={(e) => handleEdit(e)}
          ></input>
          <input
            type="text"
            value={tempTask.description}
            name="description"
            onChange={(e) => handleEdit(e)}
          ></input>
          <button onClick={() => handleUpdate()}>Update task</button>
          <button onClick={() => handleEditMode()}>Cancel</button>
        </div>
      ) : (
        <div>
          <h3>Title: {data.title}</h3>
          <p>Description: {data.description}</p>
          <p>Status: {encodeTaskStatus(data.status)}</p>
          <button onClick={() => dispatch(deleteTask(data._id))}>
            Remove task
          </button>
          <button onClick={() => handleEditMode()}>Edit task</button>
        </div>
      )}
    </div>
  );
}

export default SingleTaskManager;
