import { encodeTaskStatus } from "../utils/encodeTaskStatus";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import TextField from "@mui/material/TextField";

function FilterBars({
  applyFilter,
  selectedFilters,
  statuses,
  searchByKeyword,
}) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#eeeeee",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box className="filters-bar">
        <AppBar position="static">
          <Toolbar>
            <Box sx={{ flexGrow: 2 }}>
              <ButtonGroup
                variant="outlined"
                aria-label="outlined button group"
                color="secondary"
              >
                {statuses.map((el) => (
                  <Button
                    onClick={() => applyFilter(el)}
                    key={el}
                    className={selectedFilters.indexOf(el) > -1 ? "active" : ""}
                  >
                    {encodeTaskStatus(el)}
                  </Button>
                ))}
                <Button onClick={() => applyFilter(false)}>X</Button>
              </ButtonGroup>
            </Box>
            <Box sx={{ flexGrow: 2 }}>
              <TextField
                label="Search by title"
                variant="outlined"
                color="secondary"
                type="text"
                placeholder="Type to search..."
                onChange={(e) => searchByKeyword(e)}
                size="small"
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

export default FilterBars;
