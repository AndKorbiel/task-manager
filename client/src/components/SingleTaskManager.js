import { encodeTaskStatus } from "../utils/encodeTaskStatus";
import { useDispatch } from "react-redux";
import { deleteTask, editTask } from "../state/reducers";
import { useState, useEffect } from "react";

// material-ui
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, ButtonGroup } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

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

  const handleStatusChange = (e) => {
    const temp = { ...tempTask };
    temp.status = e.target.value;
    setTempTask(temp);
  };

  useEffect(() => {
    setTempTask(data);
  }, [data]);

  return (
    <div className="single-task">
      {isEditing ? (
        <Box>
          <TextField
            type="text"
            value={tempTask.title}
            name="title"
            label="Title"
            variant="outlined"
            onChange={(e) => handleEdit(e)}
          />
          <TextField
            type="text"
            value={tempTask.description}
            name="description"
            label="Description"
            variant="outlined"
            multiline
            rows={4}
            onChange={(e) => handleEdit(e)}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={tempTask.status}
              label="Age"
              onChange={(e) => handleStatusChange(e)}
            >
              <MenuItem value={0}>New</MenuItem>
              <MenuItem value={1}>Pending</MenuItem>
              <MenuItem value={2}>Closed</MenuItem>
            </Select>
          </FormControl>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button
              onClick={() => handleEditMode()}
              variant="outlined"
              color="error"
            >
              Cancel
            </Button>
            <Button onClick={() => handleUpdate()} variant="contained">
              Update task
            </Button>
          </ButtonGroup>
        </Box>
      ) : (
        <div>
          <h3>Title: {data.title}</h3>
          <p>Description: {data.description}</p>
          <p>Status: {encodeTaskStatus(data.status)}</p>
          <Button
            onClick={() => dispatch(deleteTask(data._id))}
            variant="contained"
            color="error"
          >
            Remove task
          </Button>
          <Button onClick={() => handleEditMode()} variant="contained">
            Edit task
          </Button>
        </div>
      )}
    </div>
  );
}

export default SingleTaskManager;
