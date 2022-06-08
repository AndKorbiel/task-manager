import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Navbar({ links }) {
  return (
    <Box sx={{ flexGrow: 1 }} className="navbar">
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {links.map((el) => (
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                <Link to={el.link}>{el.label}</Link>
              </Button>
            ))}
          </Box>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
