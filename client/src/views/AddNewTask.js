import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { postTask } from "../state/reducers";
import { useState } from "react";

// material-ui
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import { Button } from "@mui/material";
import Divider from "@mui/material/Divider";

function AddNewTask() {
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();
  const validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = true;
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validate,
    onSubmit: (values, actions) => {
      setSuccess(true);
      dispatch(postTask(values));
      actions.resetForm();
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
    },
  });

  return (
    <Container maxWidth="xl" className="shadow">
      <Box sx={{ flexGrow: 1 }}>
        <h2>Add new task</h2>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <h3>Here will go instruction</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisi
              erat, vestibulum ut nunc et, faucibus semper velit. In id dolor
              sed ligula molestie iaculis. Aliquam eget arcu sagittis, euismod
              est vitae, sollicitudin enim. Aliquam a ultrices lectus. Maecenas
              id odio malesuada, interdum ante id, malesuada nisl. Donec erat
              erat, mattis non risus et, viverra tristique erat. Aenean non
              mauris sed mi cursus sagittis. Donec a ipsum et neque tincidunt
              ullamcorper nec et magna.
            </p>
          </Grid>
          <Grid item xs={1}></Grid>
          <Divider orientation="vertical" flexItem></Divider>
          <Grid item xs={1}></Grid>
          <Grid item xs={4}>
            <form onSubmit={formik.handleSubmit} className="new-form">
              <TextField
                id="title"
                name="title"
                label="Title"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.title}
                error={formik.errors.title}
                helperText={
                  formik.errors.title ? "This field is required" : null
                }
              />

              <TextField
                id="description"
                name="description"
                label="Description"
                multiline
                rows={4}
                onChange={formik.handleChange}
                value={formik.values.description}
              />
              <Button type="submit" variant="contained">
                Submit
              </Button>
              {success ? <p>Your task has been added</p> : null}
            </form>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default AddNewTask;
